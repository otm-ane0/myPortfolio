# 3D Character Components Guide

This portfolio includes sophisticated 3D character components using Three.js and React Three Fiber.

## Current Setup

The portfolio is currently configured to show an **animated fallback character** that works without any additional files.

### ThreeScene.js
- **Current State**: Shows sophisticated animated robot character
- **Features**: Breathing animation, blinking eyes, flapping wings, glowing elements
- **Advantage**: Works immediately without any external files

## Optional Bot Neil Model

If you want to use the original Bot Neil 3D model instead:

### Step 1: Add the GLB File
1. Download or obtain the file: `bot_neil_animation_by_oscar_creativo.glb`
2. Place it in the `public/` folder of your portfolio
3. The file path should be: `public/bot_neil_animation_by_oscar_creativo.glb`

### Step 2: Update ThreeScene Component
Replace the current AnimatedFallbackMesh with the BotNeil component:

```javascript
// In src/components/ThreeScene.js
import { BotNeil } from './BotNeil'

// Replace the AnimatedFallbackMesh with:
<BotNeil scale={[0.8, 0.8, 0.8]} position={[0, -1, 0]} />
```

## Component Files

### Available Components:
- **ThreeScene.js** - Main 3D scene container (currently active)
- **BotNeil.js** - Original Bot Neil model component
- **BotNeilOptional.js** - Error-safe version of Bot Neil

### Switching Between Components:

#### Current (Animated Fallback):
```javascript
<AnimatedFallbackMesh />
```

#### Bot Neil Model (when GLB available):
```javascript
<BotNeil scale={[0.8, 0.8, 0.8]} position={[0, -1, 0]} />
```

## Performance Notes

- **Animated Fallback**: Lightweight, renders immediately
- **GLB Model**: Higher detail but requires file loading
- Both components include smooth animations and lighting effects

## Troubleshooting

If you see GLB loading errors:
1. Check that the GLB file is in the `public/` folder
2. Verify the filename matches exactly: `bot_neil_animation_by_oscar_creativo.glb`
3. Make sure the file is a valid GLB format
4. If issues persist, the animated fallback provides an excellent alternative

## Technical Details

- **Framework**: React Three Fiber
- **3D Library**: Three.js
- **Model Loading**: @react-three/drei useGLTF
- **Animations**: Custom useFrame hooks and GLB animations
- **Lighting**: Ambient + directional lights for optimal visibility