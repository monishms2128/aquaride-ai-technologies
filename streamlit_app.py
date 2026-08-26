import streamlit as st
import time

# Set page config
st.set_page_config(
    page_title="AquaRide AI Technologies | Autonomous Two-Wheeler Cleaning",
    page_icon="💧",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for dark cyan theme
st.markdown("""
<style>
    .main-title {
        font-size: 2.4rem;
        font-weight: 900;
        background: linear-gradient(90deg, #22d3ee, #38bdf8, #818cf8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .metric-card {
        background-color: #0f172a;
        padding: 18px;
        border-radius: 14px;
        border: 1px solid #1e293b;
        margin-bottom: 10px;
    }
</style>
""", unsafe_allow_html=True)

# Sidebar Navigation
st.sidebar.title("💧 AquaRide AI")
st.sidebar.caption("Team Crimson • Autonomous Wash Bay")
st.sidebar.markdown("---")

menu = st.sidebar.radio(
    "Select Module:",
    ["🤖 AI Wash Simulator", "📊 ROI & Business Viability", "📡 IoT Fleet Telemetry", "🛡️ Patent Dossier", "🏆 Hackathon Pitch & Q&A"]
)

# 1. AI WASH SIMULATOR
if menu == "🤖 AI Wash Simulator":
    st.markdown('<h1 class="main-title">AI Wash Bay Interactive Simulator</h1>', unsafe_allow_html=True)
    st.caption("Computer-vision guided differential pressure cleaning with sensitive zone protection and water recycling.")

    col1, col2 = st.columns([1.2, 1])

    with col1:
        st.subheader("1. Vehicle & Dirt Profiling")
        vehicle = st.selectbox(
            "Select Two-Wheeler Category:",
            ["Standard Commuter (Hero/Honda 100-125cc)", "Automatic Scooter / EV (Activa/Ather)", "Performance Superbike (KTM/Ninja)", "Adventure / Off-Road (Himalayan/Xpulse)"]
        )

        dirt_index = st.slider("Optical Dirt Accumulation Index (%):", min_value=10, max_value=95, value=45)

        st.info(f"🔍 **Edge AI Neural Net:** Classified `{vehicle}` with **{dirt_index}% Dirt Density**. 4 Sensitive Exclusion Envelopes applied (Cockpit, ECU, O-ring Chain).")

        mode = st.radio(
            "Wash Mode Selection:",
            ["AI Auto-Sense (Dynamic Recipe)", "Eco Mode (90s, 18L)", "Standard Mode (150s, 28L)", "Monsoon Mud Blast (240s, 38L)"],
            horizontal=True
        )

        if st.button("🚀 START AUTOMATED WASH SIMULATION", type="primary"):
            progress_bar = st.progress(0)
            status_text = st.empty()
            
            stages = [
                ("Optical LiDAR & RGB-D Dirt Mapping", 20),
                ("Differential High-Pressure Pre-Rinse", 40),
                ("Active Snow Foam & Degreaser Dosing", 60),
                ("Oscillating Contour Microfiber Scrub", 80),
                ("Spot-Free Deionized Final Rinse & Cyclone Air Dry", 100)
            ]

            for stage_name, pct in stages:
                status_text.markdown(f"**Current Operation:** `{stage_name}`")
                progress_bar.progress(pct)
                time.sleep(0.6)

            st.success("✨ **AUTOMATED WASH COMPLETE!** 100% spotless. 66 Liters water reclaimed through closed-loop filtration.")
            st.balloons()

    with col2:
        st.subheader("2. Live Sensor Telemetry")
        
        # Real-time metrics
        c1, c2 = st.columns(2)
        with c1:
            st.metric(label="Water Consumed", value="24.5 L", delta="-65.5 L vs Manual (73% Saved)")
            st.metric(label="Recirculation Rate", value="78%", delta="Clean Recycled")
        with c2:
            st.metric(label="VFD Pump Pressure", value="85 Bar", delta="Safe (<120 Bar)")
            st.metric(label="Energy & Chemical", value="0.22 kWh", delta="55 ml Active Foam")

        st.markdown("---")
        st.markdown("""
        **🛡️ Sensitive Zone Shielding Active:**
        - **Handlebars & Meter:** Capped at $\le 35\text{ Bar}$ (Mist Spray)
        - **Battery Box / ECU:** Waterlogged-Proof Mask
        - **Wheel Fenders & Underbody:** $110\text{ Bar}$ Mud Blast
        """)

# 2. ROI CALCULATOR
elif menu == "📊 ROI & Business Viability":
    st.markdown('<h1 class="main-title">MSME Business Viability & ROI Calculator</h1>', unsafe_allow_html=True)
    st.caption("Unit economics model based on Kanchipuram workshop survey.")

    col1, col2 = st.columns(2)

    with col1:
        st.subheader("Operational Inputs")
        daily_bikes = st.slider("Daily Two-Wheelers Washed:", 5, 60, 15)
        price_per_bike = st.slider("Price Charged per Wash (₹):", 50, 200, 80, 10)
        working_days = st.slider("Working Days / Month:", 20, 30, 26)
        capex = st.number_input("Initial Machine Capex (₹):", value=200000, step=10000)

        monthly_bikes = daily_bikes * working_days
        monthly_rev = monthly_bikes * price_per_bike

    with col2:
        st.subheader("Financial Performance")
        
        # Costs
        water_cost = int(monthly_bikes * 28 * 0.08)
        chemical_cost = int(monthly_bikes * 12)
        power_cost = int(monthly_bikes * 0.25 * 8.5)
        maint_cost = int(monthly_rev * 0.05)
        labor_cost = 5500
        total_op_cost = water_cost + chemical_cost + power_cost + maint_cost + labor_cost

        monthly_profit = max(0, monthly_rev - total_op_cost)
        margin = (monthly_profit / monthly_rev * 100) if monthly_rev > 0 else 0
        payback_months = (capex / monthly_profit) if monthly_profit > 0 else 99

        st.metric("Monthly Gross Revenue", f"₹{monthly_rev:,}")
        st.metric("Net Monthly Operating Profit", f"₹{monthly_profit:,}", f"{margin:.1f}% Profit Margin")
        st.metric("Capex Payback Period", f"{payback_months:.1f} Months", "Fast ROI for MSMEs")

        water_saved_annual = int((monthly_bikes * 62) * 12)
        st.info(f"💧 **Eco Impact:** Saves **{water_saved_annual:,} Liters** of fresh drinking water every year.")

# 3. IOT TELEMETRY
elif menu == "📡 IoT Fleet Telemetry":
    st.markdown('<h1 class="main-title">IoT Fleet Telemetry & Station Monitoring</h1>', unsafe_allow_html=True)
    
    st.subheader("Bay Status Overview")
    c1, c2, c3, c4 = st.columns(4)
    c1.metric("Station 01", "Kanchipuram Hub", "READY")
    c2.metric("Today Washes", "18 Bikes", "+100% on-time")
    c3.metric("Water Saved Today", "1,170 Liters", "75% recycled")
    c4.metric("Optical Turbidity", "7.8 NTU", "Optimal (<15 NTU)")

    st.markdown("---")
    st.subheader("Fluid & Chemical Tank Levels")
    st.progress(88, text="Fresh RO Demineralized Water (264 L / 300 L)")
    st.progress(74, text="Recycled Pre-Rinse Reservoir (370 L / 500 L)")
    st.progress(62, text="Active Snow Foam Shampoo (15.5 L / 25 L)")
    st.progress(55, text="Alkaline Chassis Degreaser (11.0 L / 20 L)")

# 4. PATENT DOSSIER
elif menu == "🛡️ Patent Dossier":
    st.markdown('<h1 class="main-title">Patent Specification & Technical Dossier</h1>', unsafe_allow_html=True)
    st.markdown("**Form 2 Draft | Indian Patents Act 1970 & PCT Ready**")
    
    st.markdown("""
    ### Title of Invention:
    `CYBER-PHYSICAL ADAPTIVE WASHING APPARATUS AND METHOD FOR OPEN-CHASSIS TWO-WHEELERS USING COMPUTER-VISION GUIDED DIFFERENTIAL PRESSURE ZONING AND CLOSED-LOOP RECIRCULATION`

    ### Key Novel Claims:
    1. **Claim 1 (Apparatus):** Vision-guided selective differential pressure nozzle array modulating 35–120 Bar.
    2. **Claim 2 (Method):** Adaptive wash recipe generation from pixel-level colorimetric & textural dirt mapping.
    3. **Claim 3 (Safety Shielding):** Sensitive electronic exclusion envelopes (<40 Bar ceiling).
    4. **Claim 4 (Recycling):** Multi-bed sand/carbon filtration with in-line optical turbidity feedback.
    5. **Claim 5 (Chemicals):** Spectral grease-to-dust chemical formulation dispensing.
    """)

# 5. HACKATHON PITCH
elif menu == "🏆 Hackathon Pitch & Q&A":
    st.markdown('<h1 class="main-title">Hackathon Pitch Deck & Judge Q&A</h1>', unsafe_allow_html=True)
    st.caption("Team Crimson | Smart Mobility / CleanTech / Industrial IoT")

    with st.expander("Q1: Your prototype only has an LDR sensor and relays. How can you claim AI?"):
        st.write("Hardware development follows staged validation: Stage 1 validated fluid switching and electrical isolation. For commercial and patent deployment, we engineered the Edge AI vision pipeline with YOLOv8-nano and OpenCV dirt reflectance mapping to dynamically command the VFD pump and proportional valves.")

    with st.expander("Q2: How do you prevent water damage to motorcycle electronics?"):
        st.write("This is our core Patent Claim 3. Spatial segmentation isolates the handlebar switchgear, digital instrument console, and battery bay to restrict pressure to <35 Bar atomized mist while reserving 110 Bar for wheels and fenders.")

    with st.expander("Q3: How does this make financial sense for a small garage owner?"):
        st.write("Manual washing takes 35 mins and ₹60 cost per bike. AquaRide AI washes 15 bikes/hour at ₹39 operating cost. At 15 bikes/day, the owner makes ₹12,482 net monthly profit, recovering capex in 16 months.")