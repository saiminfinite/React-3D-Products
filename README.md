# 3D Product Configurator – React & Three.js

## 📌 Project Overview
This project is a web-based **3D Product Configurator** built using **React.js** and **Three.js (React Three Fiber)**.
It allows users to interact with a 3D chair model, select individual parts, and customize them by changing colors and materials.


# 1. Setup Steps & *run* the project locally
 * Create a Folder **3D-product**
 * go under the folder open the terminal & run git clone 
 * git clone https://github.com/saiminfinite/React-3D-Products.git
 * after git clone ->
               *run these all command* -
                - cd 3D_product
                - npm install
                - Npm run dev

# Features Implemented - 

- Interactive 3D chair rendered using Three.js
* Multiple configurable parts:
  - Seat
  - Backrest
  - Front Left Leg
  - Front Right Leg
  - Back Left Leg
  - Back Right Leg

- Click on any part to select it
- Change color of the selected part
- Apply different material types
- Hover effect for better part identification
- Auto-rotation of the 3D model
- Reset option to clear all customizations
- Smooth camera controls (rotate and zoom)
- Clean and responsive user interface

# Tech Stack Used

* React.js, Three.js, JavaScript (ES6+), CSS
* @react-three/fiber 
* @react-three/drei

## - Assumptions & Limitations

# Assumptions
- The chair is created using basic Three.js shapes
- Materials are simulated using standard materials
- Only one product (chair) is configurable
- All data is handled on the frontend

# Limitations
- No backend or database is used
- Changes are lost after page refresh
- No real 3D model (GLTF/GLB) is used

# Future Improvements
- we can Use real 3D models (GLTF / GLB)
- Save user changes using backend or local storage





