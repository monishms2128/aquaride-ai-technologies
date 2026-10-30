import cv2
import numpy as np
import math
import os

def create_video(output_path="public/water_recycling_demonstration.mp4", duration_sec=18, fps=30):
    dirname = os.path.dirname(output_path)
    if dirname:
        os.makedirs(dirname, exist_ok=True)
    
    width = 1280
    height = 720
    total_frames = int(duration_sec * fps)
    
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, float(fps), (width, height))
    
    # Color palette (BGR format for OpenCV)
    c_bg = (15, 7, 2)          # Slate 950 (#02070f)
    c_panel = (28, 18, 12)     # Slate 900
    c_border = (50, 35, 20)    # Slate 800
    c_cyan = (235, 182, 6)     # Cyan (#06b6d4)
    c_blue = (235, 130, 20)    # Blue (#1482eb)
    c_emerald = (120, 210, 50) # Emerald (#32d278)
    c_amber = (40, 180, 245)   # Amber (#f5b428)
    c_rose = (90, 80, 240)     # Rose (#f0505a)
    c_white = (255, 255, 255)
    c_gray = (160, 150, 140)
    c_dark_gray = (90, 80, 70)
    
    for frame_idx in range(total_frames):
        t = frame_idx / fps  # Current time in seconds
        progress = frame_idx / total_frames
        
        # Base frame background
        frame = np.full((height, width, 3), c_bg, dtype=np.uint8)
        
        # Draw background tech grid lines
        for x in range(0, width, 60):
            cv2.line(frame, (x, 0), (x, height), (22, 14, 8), 1)
        for y in range(0, height, 60):
            cv2.line(frame, (0, y), (width, y), (22, 14, 8), 1)
            
        # Top Header Banner
        cv2.rectangle(frame, (30, 20), (width - 30, 95), c_panel, -1)
        cv2.rectangle(frame, (30, 20), (width - 30, 95), (60, 45, 30), 1)
        cv2.rectangle(frame, (30, 20), (36, 95), c_cyan, -1) # accent bar
        
        # Title text
        cv2.putText(frame, "AQUARIDE AI TECHNOLOGIES", (55, 52), cv2.FONT_HERSHEY_DUPLEX, 0.75, c_cyan, 2)
        cv2.putText(frame, "CLOSED-LOOP 0-TDS WATER RECYCLING & FLASH DISTILLATION DEMONSTRATION", (55, 80), cv2.FONT_HERSHEY_SIMPLEX, 0.48, c_white, 1)
        
        # Header Status Pills (Right side)
        cv2.rectangle(frame, (width - 430, 35), (width - 250, 80), (35, 22, 15), -1)
        cv2.rectangle(frame, (width - 430, 35), (width - 250, 80), c_emerald, 1)
        cv2.putText(frame, "WATER RECLAIMED", (width - 418, 52), cv2.FONT_HERSHEY_SIMPLEX, 0.35, c_emerald, 1)
        reclaimed_pct = min(75.4, 40 + (progress * 35.4)) if t > 3 else 0.0
        cv2.putText(frame, f"{reclaimed_pct:.1f}% CLOSED-LOOP", (width - 418, 73), cv2.FONT_HERSHEY_DUPLEX, 0.55, c_white, 1)
        
        cv2.rectangle(frame, (width - 235, 35), (width - 55, 80), (35, 22, 15), -1)
        cv2.rectangle(frame, (width - 235, 35), (width - 55, 80), c_cyan, 1)
        cv2.putText(frame, "OUTPUT WATER PURITY", (width - 223, 52), cv2.FONT_HERSHEY_SIMPLEX, 0.35, c_cyan, 1)
        tds_val = max(0, int(680 - (t / duration_sec * 680))) if t > 3 else 680
        cv2.putText(frame, f"{tds_val} PPM (0-TDS)", (width - 223, 73), cv2.FONT_HERSHEY_DUPLEX, 0.55, c_cyan if tds_val < 10 else c_amber, 2 if tds_val < 10 else 1)
        
        stages = [
            {"id": 1, "x": 60, "w": 200, "name": "1. Runoff Sump", "sub": "Gravel & Sand Desander", "color": c_rose, "in_tds": "680 PPM", "action": "Sediment Settles"},
            {"id": 2, "x": 300, "w": 200, "name": "2. Oil-Water Weir", "sub": "Coalescing Skimmer", "color": c_amber, "in_tds": "520 PPM", "action": "Oil Skimmed"},
            {"id": 3, "x": 540, "w": 200, "name": "3. Micro-Filtration", "sub": "5-Micron PP Matrix", "color": (210, 180, 50), "in_tds": "340 PPM", "action": "Particulates Out"},
            {"id": 4, "x": 780, "w": 210, "name": "4. Flash Distillation", "sub": "Vacuum Thermal Evap", "color": c_cyan, "in_tds": "<5 PPM", "action": "100% Salts Removed"},
            {"id": 5, "x": 1025, "w": 195, "name": "5. Pure 0-TDS Sump", "sub": "Recirculation Tank", "color": c_emerald, "in_tds": "0 PPM", "action": "75% Reused to Jets"}
        ]
        
        current_active_stage = min(5, int((t / duration_sec) * 5) + 1)
        
        # Draw Inter-stage Pipes with Flowing Particles
        pipe_y = 310
        for i in range(len(stages) - 1):
            x1 = stages[i]["x"] + stages[i]["w"]
            x2 = stages[i+1]["x"]
            
            # Pipe outer
            cv2.line(frame, (x1, pipe_y), (x2, pipe_y), c_border, 10)
            cv2.line(frame, (x1, pipe_y), (x2, pipe_y), (40, 30, 20), 6)
            
            # Flowing water pulse
            particle_phase = (frame_idx * 4) % (x2 - x1)
            px = x1 + particle_phase
            particle_color = stages[i]["color"]
            cv2.circle(frame, (int(px), pipe_y), 4, particle_color, -1)
            cv2.line(frame, (x1, pipe_y), (x2, pipe_y), particle_color, 2)
            
            # Flow direction arrow
            arrow_x = (x1 + x2) // 2
            cv2.line(frame, (arrow_x - 4, pipe_y - 4), (arrow_x + 2, pipe_y), c_white, 1)
            cv2.line(frame, (arrow_x - 4, pipe_y + 4), (arrow_x + 2, pipe_y), c_white, 1)

        # Draw the 5 Stages
        for s in stages:
            sx = s["x"]
            sw = s["w"]
            sy = 140
            sh = 350
            
            is_active = (s["id"] <= current_active_stage)
            is_current = (s["id"] == current_active_stage)
            
            bg_col = (32, 22, 16) if is_active else (22, 14, 10)
            b_col = s["color"] if is_active else c_border
            cv2.rectangle(frame, (sx, sy), (sx + sw, sy + sh), bg_col, -1)
            cv2.rectangle(frame, (sx, sy), (sx + sw, sy + sh), b_col, 2 if is_current else 1)
            
            if is_current:
                cv2.rectangle(frame, (sx - 2, sy - 2), (sx + sw + 2, sy + sh + 2), s["color"], 1)
                cv2.circle(frame, (sx + sw - 15, sy + 18), 5, c_emerald, -1)
            
            # Stage Header
            cv2.rectangle(frame, (sx, sy), (sx + sw, sy + 36), (42, 30, 22) if is_active else (25, 17, 12), -1)
            cv2.putText(frame, s["name"], (sx + 10, sy + 24), cv2.FONT_HERSHEY_DUPLEX, 0.44, c_white if is_active else c_gray, 1)
            cv2.putText(frame, s["sub"], (sx + 10, sy + 52), cv2.FONT_HERSHEY_SIMPLEX, 0.34, s["color"] if is_active else c_dark_gray, 1)
            
            # Internal Tank Cutaway Graphic
            tank_x = sx + 15
            tank_y = sy + 70
            tank_w = sw - 30
            tank_h = 190
            cv2.rectangle(frame, (tank_x, tank_y), (tank_x + tank_w, tank_y + tank_h), (20, 12, 8), -1)
            cv2.rectangle(frame, (tank_x, tank_y), (tank_x + tank_w, tank_y + tank_h), c_border, 1)
            
            # Liquid level in tank
            water_fill_h = int(tank_h * 0.65)
            water_top_y = tank_y + tank_h - water_fill_h
            
            if s["id"] == 1:
                water_color = (40, 50, 70) # Muddy grey-brown
            elif s["id"] == 2:
                water_color = (40, 75, 95) # Oily yellowish
            elif s["id"] == 3:
                water_color = (130, 110, 30) # Partially filtered teal
            elif s["id"] == 4:
                water_color = (200, 150, 20) # Crystal cyan vapor
            else:
                water_color = (230, 180, 20) # Pure 0-TDS cyan
                
            cv2.rectangle(frame, (tank_x + 2, water_top_y), (tank_x + tank_w - 2, tank_y + tank_h - 2), water_color, -1)
            
            for rx in range(tank_x + 5, tank_x + tank_w - 5, 8):
                ry_offset = int(math.sin((rx * 0.1) + (t * 8)) * 3)
                cv2.line(frame, (rx, water_top_y + ry_offset), (rx + 4, water_top_y + ry_offset), c_white, 1)
                
            if s["id"] == 1:
                for si in range(6):
                    sx_dot = tank_x + 20 + (si * 22)
                    sy_dot = tank_y + tank_h - 12 - (si % 3 * 6)
                    cv2.circle(frame, (sx_dot, sy_dot), 4, (30, 40, 55), -1)
                cv2.putText(frame, "HEAVY SLUDGE DROP", (tank_x + 12, tank_y + tank_h - 25), cv2.FONT_HERSHEY_SIMPLEX, 0.32, (90, 110, 140), 1)
            
            elif s["id"] == 2:
                cv2.line(frame, (tank_x + 10, water_top_y + 4), (tank_x + tank_w - 10, water_top_y + 4), c_amber, 3)
                cv2.putText(frame, "OIL SURFACE WEIR", (tank_x + 15, water_top_y + 25), cv2.FONT_HERSHEY_SIMPLEX, 0.32, c_amber, 1)
                
            elif s["id"] == 3:
                for fx in range(tank_x + 20, tank_x + tank_w - 15, 18):
                    cv2.line(frame, (fx, water_top_y + 5), (fx, tank_y + tank_h - 5), (100, 85, 20), 2)
                cv2.putText(frame, "5-MICRON MESH", (tank_x + 18, water_top_y + 35), cv2.FONT_HERSHEY_SIMPLEX, 0.32, (200, 180, 50), 1)
                
            elif s["id"] == 4:
                for cx in range(tank_x + 20, tank_x + tank_w - 20, 25):
                    steam_y = int(water_top_y - 15 - ((frame_idx * 2 + cx * 3) % 40))
                    if steam_y > tank_y + 5:
                        cv2.circle(frame, (cx, steam_y), 3, (240, 220, 150), -1)
                cv2.putText(frame, "FLASH STEAM (0-TDS)", (tank_x + 8, tank_y + 35), cv2.FONT_HERSHEY_SIMPLEX, 0.32, c_cyan, 1)
                cv2.putText(frame, "SALTS PRECIPITATED", (tank_x + 10, tank_y + tank_h - 15), cv2.FONT_HERSHEY_SIMPLEX, 0.30, (80, 140, 200), 1)
                
            elif s["id"] == 5:
                cv2.putText(frame, "NON-CONDUCTIVE", (tank_x + 15, water_top_y + 25), cv2.FONT_HERSHEY_SIMPLEX, 0.32, c_white, 1)
                cv2.putText(frame, "100% EV BATTERY SAFE", (tank_x + 8, water_top_y + 45), cv2.FONT_HERSHEY_SIMPLEX, 0.30, c_emerald, 1)
                cv2.putText(frame, "75% RECLAIM RATIO", (tank_x + 15, water_top_y + 65), cv2.FONT_HERSHEY_SIMPLEX, 0.30, c_cyan, 1)

            cv2.rectangle(frame, (sx + 8, sy + sh - 75), (sx + sw - 8, sy + sh - 10), (25, 17, 12), -1)
            cv2.rectangle(frame, (sx + 8, sy + sh - 75), (sx + sw - 8, sy + sh - 10), (50, 35, 25), 1)
            
            cv2.putText(frame, f"TDS: {s['in_tds']}", (sx + 14, sy + sh - 52), cv2.FONT_HERSHEY_DUPLEX, 0.40, s["color"], 1)
            cv2.putText(frame, s["action"], (sx + 14, sy + sh - 32), cv2.FONT_HERSHEY_SIMPLEX, 0.33, c_white, 1)
            cv2.putText(frame, "STATUS: NOMINAL" if is_active else "STATUS: STANDBY", (sx + 14, sy + sh - 16), cv2.FONT_HERSHEY_SIMPLEX, 0.28, c_emerald if is_active else c_dark_gray, 1)

        # Recirculation line
        recirc_y = 525
        cv2.line(frame, (1120, 490), (1120, recirc_y), c_emerald, 2)
        cv2.line(frame, (1120, recirc_y), (160, recirc_y), c_emerald, 2)
        cv2.line(frame, (160, recirc_y), (160, 490), c_emerald, 2)
        
        ret_pulse = (frame_idx * 8) % (1120 - 160)
        cv2.circle(frame, (1120 - ret_pulse, recirc_y), 4, c_white, -1)
        cv2.putText(frame, "CLOSED-LOOP RECIRCULATION LINE (75% DEMINERALIZED WATER REUSED TO HIGH-PRESSURE NOZZLES)", (280, recirc_y - 8), cv2.FONT_HERSHEY_SIMPLEX, 0.35, c_emerald, 1)
        
        # Bottom Summary Banner
        cv2.rectangle(frame, (30, 560), (width - 30, 695), c_panel, -1)
        cv2.rectangle(frame, (30, 560), (width - 30, 695), (60, 45, 30), 1)
        
        pillars = [
            ("0-TDS EV PROTECTION", "Demineralized pure water is non-conductive; prevents short circuits in EV battery packs & digital clusters."),
            ("75% WATER RECLAIMED", "Consumes only ~22 L net fresh water per bike vs 90 L in traditional Indian pressure washes."),
            ("NO MINERAL SPOTTING", "Separates 100% of hard calcium/magnesium salts; bikes dry with showroom gloss."),
            ("CPCB ZLD COMPLIANT", "Zero toxic effluent discharge into public storm drains; fully compliant with pollution norms.")
        ]
        
        col_w = (width - 90) // 4
        for pi, (p_title, p_desc) in enumerate(pillars):
            px = 45 + (pi * (col_w + 5))
            cv2.putText(frame, f"[ {p_title} ]", (px, 588), cv2.FONT_HERSHEY_DUPLEX, 0.38, c_cyan, 1)
            
            words = p_desc.split()
            line1 = " ".join(words[:len(words)//2 + 1])
            line2 = " ".join(words[len(words)//2 + 1:])
            cv2.putText(frame, line1, (px, 612), cv2.FONT_HERSHEY_SIMPLEX, 0.31, c_white, 1)
            cv2.putText(frame, line2, (px, 630), cv2.FONT_HERSHEY_SIMPLEX, 0.31, c_gray, 1)
            
            if pi < 3:
                cv2.line(frame, (px + col_w, 575), (px + col_w, 680), c_border, 1)
                
        cv2.rectangle(frame, (0, height - 8), (int(width * progress), height), c_cyan, -1)
        out.write(frame)
        
    out.release()
    print(f"Video created successfully at: {output_path}")

if __name__ == "__main__":
    create_video("public/water_recycling_demonstration.mp4")
    create_video("water_recycling_demonstration.mp4")
