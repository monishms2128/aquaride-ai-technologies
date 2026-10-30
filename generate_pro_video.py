import cv2
import numpy as np
import math
import os
from PIL import Image, ImageDraw, ImageFont

def render_professional_recycling_video(output_path="public/aquaride_water_recycling_pro.mp4", duration_sec=48, fps=30):
    os.makedirs(os.path.dirname(output_path) if os.path.dirname(output_path) else ".", exist_ok=True)
    
    width = 1920
    height = 1080
    total_frames = int(duration_sec * fps)
    
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, float(fps), (width, height))
    
    # Try loading clean system TTF fonts, fallback to default
    font_path_bold = "C:/Windows/Fonts/arialbd.ttf"
    font_path_regular = "C:/Windows/Fonts/arial.ttf"
    font_path_mono = "C:/Windows/Fonts/consola.ttf"
    
    def get_font(path, size):
        try:
            return ImageFont.truetype(path, size)
        except:
            return ImageFont.load_default()

    f_title = get_font(font_path_bold, 36)
    f_header = get_font(font_path_bold, 28)
    f_sub = get_font(font_path_regular, 20)
    f_body = get_font(font_path_regular, 18)
    f_mono = get_font(font_path_mono, 18)
    f_badge = get_font(font_path_bold, 15)
    f_large_metric = get_font(font_path_bold, 42)
    f_small = get_font(font_path_regular, 14)

    # 5 Process Scenes breakdown across 48 seconds:
    # 0s - 7s:   Scene 1: Introduction & Wash Bay Runoff Collection (680 PPM Hard Water)
    # 7s - 16s:  Scene 2: Cyclone Desander & Coalescing Oil-Water Separation Weir (Oil < 5mg/L)
    # 16s - 25s: Scene 3: 5-Micron Multi-Media Polypropylene Depth Filtration (Particulates Out)
    # 25s - 36s: Scene 4: Vacuum Flash Evaporation & Chilled Condensation (0-TDS Pure Demineralization)
    # 36s - 44s: Scene 5: Clean Holding Reservoir & 75% Closed-Loop Recirculation
    # 44s - 48s: Scene 6: Executive Validation & Technical Specification Summary
    
    print(f"Generating {duration_sec}s broadcast-quality video ({total_frames} frames @ 1080p 30fps)...")

    for frame_idx in range(total_frames):
        t = frame_idx / fps
        global_progress = frame_idx / total_frames

        # Determine active scene
        if t < 7:
            scene_idx = 1
            scene_progress = t / 7.0
            scene_title = "STAGE 1: GRATED RUNOFF DRAINAGE & HYDRO-CYCLONE DESANDING"
            scene_tagline = "Collecting wash effluent and separating heavy road mud, grit, and tire debris"
            badge_text = "MECHANICAL PRECIPITATION"
            inflow_tds = "680 PPM"
            outflow_tds = "580 PPM"
            active_pct = 20
        elif t < 16:
            scene_idx = 2
            scene_progress = (t - 7) / 9.0
            scene_title = "STAGE 2: COALESCING OIL-WATER SEPARATION WEIR"
            scene_tagline = "Trapping motorcycle chain lubricants, engine oils, and unburnt hydrocarbons"
            badge_text = "HYDROCARBON RECOVERY (<5 mg/L)"
            inflow_tds = "580 PPM"
            outflow_tds = "460 PPM"
            active_pct = 40
        elif t < 25:
            scene_idx = 3
            scene_progress = (t - 16) / 9.0
            scene_title = "STAGE 3: 5-MICRON MULTI-MEDIA MATRIX FILTRATION"
            scene_tagline = "High-density activated carbon & spun polypropylene depth micro-filtration"
            badge_text = "SUSPENDED SOLIDS NEUTRALIZED"
            inflow_tds = "460 PPM"
            outflow_tds = "320 PPM"
            active_pct = 60
        elif t < 36:
            scene_idx = 4
            scene_progress = (t - 25) / 11.0
            scene_title = "STAGE 4: VACUUM FLASH DISTILLATION & CONDENSATION (0-TDS CORE)"
            scene_tagline = "Thermal vaporization separating 100% calcium carbonate, lime & dissolved salts"
            badge_text = "PATENT-PENDING 0-TDS PURITY (<5 PPM)"
            inflow_tds = "320 PPM (Salts)"
            outflow_tds = "< 5 PPM (Pure Distillate)"
            active_pct = 80
        elif t < 44:
            scene_idx = 5
            scene_progress = (t - 36) / 8.0
            scene_title = "STAGE 5: 0-TDS BUFFER SUMP & CLOSED-LOOP RECIRCULATION"
            scene_tagline = "75% reclaimed non-conductive water returned to high-pressure wash nozzles"
            badge_text = "75% CLOSED-LOOP RECLAIMED"
            inflow_tds = "< 5 PPM"
            outflow_tds = "0 PPM (EV Battery Safe)"
            active_pct = 100
        else:
            scene_idx = 6
            scene_progress = (t - 44) / 4.0
            scene_title = "AQUARIDE AI: CLOSED-LOOP WATER CONSERVATION VALIDATION"
            scene_tagline = "75% Net Water Reclaimed • 100% EV Electronics Safe • CPCB ZLD Compliant"
            badge_text = "INNOWAH! 2026-27 SPECIFICATION"
            inflow_tds = "75% Recirculated"
            outflow_tds = "0-TDS Pure"
            active_pct = 100

        # Background base: Deep Space / Dark Cybernetic Navy Slate
        img = Image.new("RGBA", (width, height), (3, 7, 18, 255))
        draw = ImageDraw.Draw(img)

        # Draw subtle engineering isometric grid
        grid_spacing = 80
        for gx in range(0, width, grid_spacing):
            draw.line([(gx, 0), (gx, height)], fill=(15, 23, 42, 140), width=1)
        for gy in range(0, height, grid_spacing):
            draw.line([(0, gy), (width, gy)], fill=(15, 23, 42, 140), width=1)

        # HEADER BANNER (Top)
        draw.rounded_rectangle([40, 25, width - 40, 130], radius=16, fill=(15, 23, 42, 230), outline=(30, 41, 59, 255), width=2)
        # Cyan accent left marker
        draw.rounded_rectangle([40, 25, 48, 130], radius=4, fill=(6, 182, 212, 255))

        # Title & Subtitle
        draw.text((75, 40), "AQUARIDE AI TECHNOLOGIES", font=f_title, fill=(6, 182, 212, 255))
        draw.text((75, 88), "CLOSED-LOOP 0-TDS DISTILLATION & WATER RECLAMATION SKID", font=f_sub, fill=(241, 245, 249, 255))

        # Top Right Live Metrics Telemetry
        # Metric 1: Closed Loop Reclaim %
        reclaim_calc = min(75.0, 30.0 + (global_progress * 45.0))
        draw.rounded_rectangle([width - 540, 42, width - 290, 115], radius=12, fill=(10, 30, 25, 240), outline=(16, 185, 129, 200), width=1)
        draw.text((width - 525, 50), "NET WATER RECLAIMED", font=f_badge, fill=(52, 211, 153, 255))
        draw.text((width - 525, 72), f"{reclaim_calc:.1f}% REUSED", font=f_header, fill=(255, 255, 255, 255))

        # Metric 2: Output TDS Purity
        tds_calc = max(0, int(680 - (global_progress * 680)))
        draw.rounded_rectangle([width - 275, 42, width - 60, 115], radius=12, fill=(10, 25, 40, 240), outline=(6, 182, 212, 200), width=1)
        draw.text((width - 260, 50), "OUTPUT WATER PURITY", font=f_badge, fill=(103, 232, 249, 255))
        draw.text((width - 260, 72), f"{tds_calc} PPM (0-TDS)", font=f_header, fill=(6, 182, 212, 255) if tds_calc < 10 else (245, 158, 11, 255))

        # SCENE HEADER & BREADCRUMB INDICATOR
        draw.rounded_rectangle([40, 150, width - 40, 225], radius=14, fill=(30, 41, 59, 180), outline=(51, 65, 85, 255), width=1)
        
        # Pulsing active scene indicator dot
        pulse_rad = 7 + int(abs(math.sin(t * 6)) * 4)
        draw.ellipse([70 - pulse_rad, 188 - pulse_rad, 70 + pulse_rad, 188 + pulse_rad], fill=(6, 182, 212, 100))
        draw.ellipse([64, 182, 76, 194], fill=(6, 182, 212, 255))

        draw.text((95, 162), scene_title, font=f_header, fill=(255, 255, 255, 255))
        draw.text((95, 196), scene_tagline, font=f_sub, fill=(148, 163, 184, 255))

        # Stage Category Badge on Right
        draw.rounded_rectangle([width - 440, 165, width - 65, 210], radius=10, fill=(6, 182, 212, 30), outline=(6, 182, 212, 180), width=1)
        draw.text((width - 425, 178), badge_text, font=f_badge, fill=(103, 232, 249, 255))

        # MAIN INTERACTIVE SCHEMATIC AREA (Y: 245 to 870)
        # We render 5 Process Chambers across the width
        # Chambers:
        # C1: Inflow Sump & Cyclone Hopper (X: 60 - 390)
        # C2: Coalescing Oil-Weir (X: 420 - 750)
        # C3: 5-Micron Depth Filter (X: 780 - 1110)
        # C4: Flash Distillation Tower (X: 1140 - 1500)
        # C5: 0-TDS Clean Buffer Tank (X: 1530 - 1860)

        chambers = [
            {"id": 1, "x": 60, "w": 340, "name": "1. Runoff Sump", "sub": "Hydro-Cyclone Desander", "accent": (239, 68, 68), "stage_tds": "680 PPM", "func": "Grit & Sludge Removal"},
            {"id": 2, "x": 420, "w": 340, "name": "2. Coalescing Skimmer", "sub": "Oil-Water Separation Weir", "accent": (245, 158, 11), "stage_tds": "580 PPM", "func": "Hydrocarbons (<5 mg/L)"},
            {"id": 3, "x": 780, "w": 340, "name": "3. Micro-Filtration", "sub": "5-Micron Multi-Media Matrix", "accent": (20, 184, 166), "stage_tds": "460 PPM", "func": "Suspended Solids Trapped"},
            {"id": 4, "x": 1140, "w": 360, "name": "4. Flash Distillation", "sub": "Thermal Evaporator & Condenser", "accent": (6, 182, 212), "stage_tds": "<5 PPM", "func": "100% Mineral Salts Stripped"},
            {"id": 5, "x": 1520, "w": 340, "name": "5. Clean Buffer Sump", "sub": "0-TDS Recirculation Tank", "accent": (16, 185, 129), "stage_tds": "0 PPM", "func": "75% Reused to Wash Manifold"}
        ]

        # Draw inter-connecting pipes with high-speed fluid pulse
        pipe_y = 510
        for i in range(len(chambers) - 1):
            px1 = chambers[i]["x"] + chambers[i]["w"]
            px2 = chambers[i+1]["x"]
            
            # Pipe body
            draw.line([(px1, pipe_y), (px2, pipe_y)], fill=(30, 41, 59, 255), width=18)
            draw.line([(px1, pipe_y), (px2, pipe_y)], fill=(15, 23, 42, 255), width=12)

            # Flowing pulse particle
            pulse_phase = (frame_idx * 6) % (px2 - px1)
            p_x = px1 + pulse_phase
            pulse_col = chambers[i]["accent"]
            draw.ellipse([p_x - 6, pipe_y - 6, p_x + 6, pipe_y + 6], fill=pulse_col)
            
            # Directional Arrow
            mid_x = (px1 + px2) // 2
            draw.line([(mid_x - 6, pipe_y - 6), (mid_x + 4, pipe_y)], fill=(255, 255, 255, 255), width=2)
            draw.line([(mid_x - 6, pipe_y + 6), (mid_x + 4, pipe_y)], fill=(255, 255, 255, 255), width=2)

        # Draw the 5 Detailed Engineering Chambers
        for ch in chambers:
            cx = ch["x"]
            cw = ch["w"]
            cy = 245
            ch_h = 580

            is_active_ch = (ch["id"] <= scene_idx)
            is_current_ch = (ch["id"] == scene_idx)

            # Chamber boundary container
            box_fill = (15, 23, 42, 240) if is_active_ch else (10, 16, 26, 200)
            box_border = ch["accent"] if is_current_ch else ((51, 65, 85, 255) if is_active_ch else (30, 41, 59, 150))
            box_border_width = 3 if is_current_ch else 1

            draw.rounded_rectangle([cx, cy, cx + cw, cy + ch_h], radius=16, fill=box_fill, outline=box_border, width=box_border_width)

            # Highlight Glow if current
            if is_current_ch:
                draw.rounded_rectangle([cx - 3, cy - 3, cx + cw + 3, cy + ch_h + 3], radius=18, outline=ch["accent"], width=1)
                # Active badge top right
                draw.rounded_rectangle([cx + cw - 95, cy + 12, cx + cw - 12, cy + 34], radius=6, fill=(16, 185, 129, 40), outline=(16, 185, 129, 200), width=1)
                draw.text((cx + cw - 88, cy + 16), "PROCESSING", font=f_small, fill=(52, 211, 153, 255))

            # Chamber Header
            draw.text((cx + 18, cy + 15), ch["name"], font=f_header, fill=(255, 255, 255, 255) if is_active_ch else (100, 116, 139, 255))
            draw.text((cx + 18, cy + 50), ch["sub"], font=f_small, fill=ch["accent"] if is_active_ch else (71, 85, 105, 255))

            # Internal Cutaway Tank Graphics
            tank_x = cx + 20
            tank_y = cy + 85
            tank_w = cw - 40
            tank_h = 320

            draw.rounded_rectangle([tank_x, tank_y, tank_x + tank_w, tank_y + tank_h], radius=10, fill=(3, 7, 18, 255), outline=(30, 41, 59, 255), width=2)

            # Fluid fill level
            fluid_h = int(tank_h * 0.70)
            fluid_top_y = tank_y + tank_h - fluid_h

            # Fluid color tone by stage
            if ch["id"] == 1:
                fluid_color = (68, 55, 42, 240) # Muddy brown
            elif ch["id"] == 2:
                fluid_color = (75, 70, 35, 240) # Oily yellow-green
            elif ch["id"] == 3:
                fluid_color = (25, 75, 70, 240) # Filtered blue-green
            elif ch["id"] == 4:
                fluid_color = (15, 60, 95, 240) # Pure blue vaporizing
            else:
                fluid_color = (6, 120, 140, 250) # 0-TDS crystal cyan

            draw.rounded_rectangle([tank_x + 3, fluid_top_y, tank_x + tank_w - 3, tank_y + tank_h - 3], radius=8, fill=fluid_color)

            # Surface Wave Simulation
            for wx in range(tank_x + 6, tank_x + tank_w - 6, 12):
                wave_offset = int(math.sin((wx * 0.08) + (t * 8)) * 4)
                draw.line([(wx, fluid_top_y + wave_offset), (wx + 6, fluid_top_y + wave_offset)], fill=(255, 255, 255, 220), width=2)

            # Stage-Specific Technical Internal Hardware Visualization
            if ch["id"] == 1:
                # Cyclone Cone & Heavy Sludge Deposition
                cone_top_y = tank_y + 25
                cone_bot_y = fluid_top_y + 40
                draw.line([(tank_x + 40, cone_top_y), (tank_x + tank_w//2, cone_bot_y)], fill=(120, 113, 108, 255), width=3)
                draw.line([(tank_x + tank_w - 40, cone_top_y), (tank_x + tank_w//2, cone_bot_y)], fill=(120, 113, 108, 255), width=3)
                # Falling particles
                for si in range(8):
                    px_s = tank_x + 60 + (si * 28)
                    py_s = tank_y + tank_h - 20 - (si % 3 * 10)
                    draw.ellipse([px_s - 5, py_s - 5, px_s + 5, py_s + 5], fill=(50, 40, 30, 255))
                draw.text((tank_x + 25, tank_y + tank_h - 45), "HEAVY SLUDGE GRAVITY PURGE", font=f_badge, fill=(239, 68, 68, 255))

            elif ch["id"] == 2:
                # Oil Skimmer Floating Surface Weir & Rotating Disc
                draw.line([(tank_x + 10, fluid_top_y + 6), (tank_x + tank_w - 10, fluid_top_y + 6)], fill=(245, 158, 11, 255), width=6)
                # Rotating skimmer wheel
                wheel_cx = tank_x + tank_w // 2
                wheel_cy = fluid_top_y + 6
                rot_ang = t * 4
                rx_arm = int(math.cos(rot_ang) * 24)
                ry_arm = int(math.sin(rot_ang) * 24)
                draw.ellipse([wheel_cx - 24, wheel_cy - 24, wheel_cx + 24, wheel_cy + 24], outline=(245, 158, 11, 255), width=2)
                draw.line([(wheel_cx, wheel_cy), (wheel_cx + rx_arm, wheel_cy + ry_arm)], fill=(255, 255, 255, 255), width=2)
                draw.text((tank_x + 30, fluid_top_y + 35), "OLEOPHILIC OIL WEIR", font=f_badge, fill=(253, 230, 138, 255))
                draw.text((tank_x + 40, tank_y + tank_h - 30), "GREASE CANISTER <5mg/L", font=f_small, fill=(245, 158, 11, 255))

            elif ch["id"] == 3:
                # 5-Micron Cylindrical Cartridges
                for cart_x in [tank_x + 45, tank_x + 130, tank_x + 215]:
                    draw.rounded_rectangle([cart_x, fluid_top_y + 15, cart_x + 45, tank_y + tank_h - 20], radius=6, fill=(15, 23, 42, 255), outline=(20, 184, 166, 255), width=2)
                    for my in range(fluid_top_y + 25, tank_y + tank_h - 25, 16):
                        draw.line([(cart_x + 4, my), (cart_x + 41, my)], fill=(20, 184, 166, 120), width=1)
                draw.text((tank_x + 35, fluid_top_y + 40), "5-MICRON MATRIX", font=f_badge, fill=(255, 255, 255, 255))
                draw.text((tank_x + 30, tank_y + tank_h - 40), "PARTICULATES ZEROED", font=f_badge, fill=(45, 212, 191, 255))

            elif ch["id"] == 4:
                # Flash Vacuum Distillation: Thermal Base + Vapor Steam + Chilled Copper Condenser Coils
                # Thermal heat coils at bottom
                for hx in range(tank_x + 30, tank_x + tank_w - 30, 25):
                    draw.line([(hx, tank_y + tank_h - 15), (hx + 12, tank_y + tank_h - 28)], fill=(239, 68, 68, 255), width=3)
                    draw.line([(hx + 12, tank_y + tank_h - 28), (hx + 24, tank_y + tank_h - 15)], fill=(239, 68, 68, 255), width=3)
                
                # Vapor rising bubbles & steam
                for vi in range(12):
                    v_phase = (frame_idx * 4 + vi * 45) % 180
                    vx = tank_x + 30 + (vi * 24)
                    vy = tank_y + tank_h - 40 - v_phase
                    if vy > tank_y + 35:
                        draw.ellipse([vx - 4, vy - 4, vx + 4, vy + 4], fill=(224, 242, 254, 200))
                
                # Chilled Condenser Coil array at top
                for coil_y in [tank_y + 20, tank_y + 45, tank_y + 70]:
                    draw.line([(tank_x + 20, coil_y), (tank_x + tank_w - 20, coil_y)], fill=(6, 182, 212, 255), width=4)
                
                draw.text((tank_x + 40, tank_y + 85), "VACUUM FLASH STEAM", font=f_badge, fill=(186, 230, 253, 255))
                draw.text((tank_x + 35, fluid_top_y + 45), "SALTS PRECIPITATED (-99.9%)", font=f_badge, fill=(245, 158, 11, 255))
                draw.text((tank_x + 45, tank_y + tank_h - 45), "THERMAL FLASH RECOVERY", font=f_small, fill=(239, 68, 68, 255))

            elif ch["id"] == 5:
                # Clean Buffer Sump & Dual High-Pressure Outflow Manifold
                draw.text((tank_x + 35, fluid_top_y + 30), "0-TDS PURE DISTILLATE", font=f_header, fill=(255, 255, 255, 255))
                draw.text((tank_x + 35, fluid_top_y + 75), "NON-CONDUCTIVE WATER", font=f_badge, fill=(103, 232, 249, 255))
                draw.text((tank_x + 35, fluid_top_y + 110), "100% EV BATTERY SAFE", font=f_badge, fill=(52, 211, 153, 255))
                draw.text((tank_x + 35, fluid_top_y + 145), "75% RECLAIM RATIO", font=f_header, fill=(52, 211, 153, 255))
                
                # Level Float Sensor Indicator
                draw.rounded_rectangle([tank_x + tank_w - 30, tank_y + 20, tank_x + tank_w - 15, tank_y + tank_h - 20], radius=4, fill=(15, 23, 42, 255), outline=(16, 185, 129, 255), width=1)
                float_y = fluid_top_y + 10
                draw.rectangle([tank_x + tank_w - 32, float_y, tank_x + tank_w - 13, float_y + 15], fill=(52, 211, 153, 255))

            # Chamber Detailed Performance Footer Metrics
            footer_y = cy + ch_h - 150
            draw.rounded_rectangle([cx + 15, footer_y, cx + cw - 15, cy + ch_h - 15], radius=10, fill=(3, 7, 18, 230), outline=(30, 41, 59, 255), width=1)
            
            draw.text((cx + 25, footer_y + 12), f"EFFLUENT TDS: {ch['stage_tds']}", font=f_mono, fill=ch["accent"])
            draw.text((cx + 25, footer_y + 40), ch["func"], font=f_small, fill=(241, 245, 249, 255))
            
            status_text = "STAGE VERIFIED: OPTIMAL" if is_active_ch else "STANDBY / READY"
            status_col = (16, 185, 129, 255) if is_active_ch else (100, 116, 139, 255)
            draw.text((cx + 25, footer_y + 70), status_text, font=f_badge, fill=status_col)
            draw.text((cx + 25, footer_y + 98), f"MASS FLOW: 22.5 L/MIN", font=f_mono, fill=(148, 163, 184, 255))

        # BOTTOM CLOSED-LOOP RECIRCULATION LINE (From Stage 5 back to High-Pressure Jet Nozzle)
        recirc_y = 855
        draw.line([(1690, 825), (1690, recirc_y)], fill=(16, 185, 129, 255), width=4)
        draw.line([(1690, recirc_y), (230, recirc_y)], fill=(16, 185, 129, 255), width=4)
        draw.line([(230, recirc_y), (230, 825)], fill=(16, 185, 129, 255), width=4)
        
        # High speed reverse return particle
        ret_pulse = (frame_idx * 14) % (1690 - 230)
        draw.ellipse([1690 - ret_pulse - 6, recirc_y - 6, 1690 - ret_pulse + 6, recirc_y + 6], fill=(255, 255, 255, 255))
        draw.text((580, recirc_y - 24), "CLOSED-LOOP CLOSED-CIRCUIT LINE (75% RECLAIMED 0-TDS WATER RETURNED TO TRI-AXIS SPRAY GANTRY)", font=f_badge, fill=(52, 211, 153, 255))

        # BOTTOM COMPREHENSIVE 4-PILLAR VALIDATION BAR (Y: 890 to 1045)
        draw.rounded_rectangle([40, 890, width - 40, 1045], radius=16, fill=(15, 23, 42, 240), outline=(30, 41, 59, 255), width=2)

        pillars = [
            ("0-TDS EV BATTERY SAFE", "Non-conductive demineralized pure water eliminates electrical short circuits in EV battery packs & digital TFT clusters."),
            ("75% WATER RECLAIMED", "Consumes only ~7.5 L net fresh water per bike vs 70–90 Liters in traditional Indian manual pressure washes."),
            ("ZERO MINERAL SCALE", "Demineralization strips all hard calcium carbonates; motorcycles dry spotless with true showroom mirror gloss."),
            ("CPCB ZLD COMPLIANT", "Zero toxic effluent discharge into municipal storm drains; 100% compliant with Central Pollution Control Board norms.")
        ]

        col_w = (width - 120) // 4
        for pi, (p_title, p_desc) in enumerate(pillars):
            px = 65 + (pi * (col_w + 15))
            draw.text((px, 908), f"● {p_title}", font=f_header, fill=(6, 182, 212, 255))
            
            # Text wrapping
            words = p_desc.split()
            l1 = " ".join(words[:7])
            l2 = " ".join(words[7:14])
            l3 = " ".join(words[14:])
            draw.text((px, 948), l1, font=f_body, fill=(241, 245, 249, 255))
            draw.text((px, 975), l2, font=f_body, fill=(203, 213, 225, 255))
            if l3:
                draw.text((px, 1002), l3, font=f_body, fill=(148, 163, 184, 255))

            if pi < 3:
                draw.line([(px + col_w + 5, 905), (px + col_w + 5, 1030)], fill=(30, 41, 59, 255), width=1)

        # PROGRESS BAR AT BOTTOM-MOST EDGE (Y: 1065 to 1076)
        draw.rectangle([0, height - 12, width, height], fill=(15, 23, 42, 255))
        draw.rectangle([0, height - 12, int(width * global_progress), height], fill=(6, 182, 212, 255))

        # Convert PIL RGBA to OpenCV BGR
        cv_frame = cv2.cvtColor(np.array(img), cv2.COLOR_RGBA2BGR)
        out.write(cv_frame)

        if frame_idx % 150 == 0:
            print(f"Rendered frame {frame_idx}/{total_frames} ({(frame_idx/total_frames*100):.1f}%)...")

    out.release()
    print(f"Professional video generation complete! Saved to {output_path}")

if __name__ == "__main__":
    render_professional_recycling_video("public/aquaride_water_recycling_pro.mp4", duration_sec=48, fps=30)
    render_professional_recycling_video("aquaride_water_recycling_pro.mp4", duration_sec=48, fps=30)
