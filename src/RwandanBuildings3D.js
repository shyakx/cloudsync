import React, { useEffect, useRef, useState } from 'react';

const RwandanBuildings3D = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Iconic Kigali landmarks data
  const buildings = [
    {
      name: "Kigali Convention Centre",
      x: 0.15,
      y: 0.2,
      width: 120,
      height: 160,
      depth: 100,
      color: '#7c3aed',
      glowColor: 'rgba(147, 51, 234, 0.3)',
      rotationSpeed: -0.001,
      floatSpeed: 0.002,
      windows: 42,
      landmark: true
    },
    {
      name: "Radisson Blue Hotel",
      x: 0.75,
      y: 0.25,
      width: 90,
      height: 140,
      depth: 70,
      color: '#0284c7',
      glowColor: 'rgba(2, 132, 199, 0.3)',
      rotationSpeed: 0.002,
      floatSpeed: -0.001,
      windows: 32,
      landmark: true
    },
    {
      name: "Kigali City Tower",
      x: 0.45,
      y: 0.35,
      width: 70,
      height: 180,
      depth: 50,
      color: '#1e3a8a',
      glowColor: 'rgba(59, 130, 246, 0.3)',
      rotationSpeed: 0.0025,
      floatSpeed: 0.001,
      windows: 25,
      landmark: true
    },
    {
      name: "BCR Headquarters",
      x: 0.85,
      y: 0.5,
      width: 65,
      height: 150,
      depth: 45,
      color: '#059669',
      glowColor: 'rgba(16, 185, 129, 0.3)',
      rotationSpeed: 0.003,
      floatSpeed: -0.0015,
      windows: 22,
      landmark: true
    },
    {
      name: "Bank of Kigali Tower",
      x: 0.25,
      y: 0.55,
      width: 75,
      height: 165,
      depth: 55,
      color: '#ea580c',
      glowColor: 'rgba(251, 146, 60, 0.3)',
      rotationSpeed: -0.0015,
      floatSpeed: 0.0018,
      windows: 28,
      landmark: true
    },
    {
      name: "RDB Headquarters",
      x: 0.6,
      y: 0.65,
      width: 80,
      height: 135,
      depth: 60,
      color: '#dc2626',
      glowColor: 'rgba(239, 68, 68, 0.3)',
      rotationSpeed: -0.002,
      floatSpeed: 0.0012,
      windows: 26,
      landmark: true
    },
    {
      name: "Kigali Heights",
      x: 0.05,
      y: 0.7,
      width: 60,
      height: 125,
      depth: 40,
      color: '#7c2d12',
      glowColor: 'rgba(194, 65, 12, 0.3)',
      rotationSpeed: 0.0018,
      floatSpeed: -0.0008,
      windows: 24,
      landmark: false
    },
    {
      name: "UTB Building",
      x: 0.35,
      y: 0.75,
      width: 55,
      height: 115,
      depth: 35,
      color: '#166534',
      glowColor: 'rgba(34, 197, 94, 0.3)',
      rotationSpeed: -0.0012,
      floatSpeed: 0.0022,
      windows: 20,
      landmark: false
    }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // 3D projection function
    const project3D = (x, y, z, rotation, perspective = 800) => {
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);
      
      // Rotate around Y axis
      const rotatedX = x * cos - z * sin;
      const rotatedZ = x * sin + z * cos;
      
      // Apply perspective
      const scale = perspective / (perspective + rotatedZ);
      const projectedX = rotatedX * scale + canvas.width / 2;
      const projectedY = y * scale + canvas.height / 2;
      
      return { x: projectedX, y: projectedY, scale, z: rotatedZ };
    };

    // Draw a 3D building
    const drawBuilding = (building, time) => {
      const { x, y, width, height, depth, color, glowColor, rotationSpeed, floatSpeed, windows } = building;
      
      // Calculate animations
      const rotation = time * rotationSpeed + mousePosition.x * 0.5;
      const floatOffset = Math.sin(time * floatSpeed) * 20;
      const adjustedY = y + floatOffset / canvas.height;
      
      // Building center in 3D space
      const centerX = (x - 0.5) * canvas.width;
      const centerY = (adjustedY - 0.5) * canvas.height;
      const centerZ = 0;
      
      // Calculate vertices for the building
      const vertices = [
        // Front face
        { x: centerX - width/2, y: centerY - height/2, z: centerZ + depth/2 },
        { x: centerX + width/2, y: centerY - height/2, z: centerZ + depth/2 },
        { x: centerX + width/2, y: centerY + height/2, z: centerZ + depth/2 },
        { x: centerX - width/2, y: centerY + height/2, z: centerZ + depth/2 },
        // Back face
        { x: centerX - width/2, y: centerY - height/2, z: centerZ - depth/2 },
        { x: centerX + width/2, y: centerY - height/2, z: centerZ - depth/2 },
        { x: centerX + width/2, y: centerY + height/2, z: centerZ - depth/2 },
        { x: centerX - width/2, y: centerY + height/2, z: centerZ - depth/2 }
      ];
      
      // Project all vertices
      const projected = vertices.map(v => project3D(v.x, v.y, v.z, rotation));
      
      // Sort faces by depth for proper rendering
      const faces = [
        { indices: [0, 1, 2, 3], z: (projected[0].z + projected[2].z) / 2, brightness: 1.0 }, // Front
        { indices: [4, 5, 6, 7], z: (projected[4].z + projected[6].z) / 2, brightness: 0.6 }, // Back
        { indices: [0, 1, 5, 4], z: (projected[0].z + projected[5].z) / 2, brightness: 0.8 }, // Top
        { indices: [2, 3, 7, 6], z: (projected[2].z + projected[7].z) / 2, brightness: 0.7 }, // Bottom
        { indices: [0, 3, 7, 4], z: (projected[0].z + projected[7].z) / 2, brightness: 0.85 }, // Left
        { indices: [1, 2, 6, 5], z: (projected[1].z + projected[6].z) / 2, brightness: 0.75 }  // Right
      ];
      
      faces.sort((a, b) => a.z - b.z);
      
      // Draw faces
      faces.forEach(face => {
        ctx.beginPath();
        face.indices.forEach((index, i) => {
          const point = projected[index];
          if (i === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        });
        ctx.closePath();
        
        // Apply face brightness
        const rgb = parseInt(color.slice(1), 16);
        const r = (rgb >> 16) & 255;
        const g = (rgb >> 8) & 255;
        const b = rgb & 255;
        
        // Enhanced brightness for landmark buildings
        let brightnessMultiplier = building.landmark ? 1.2 : 1.0;
        let baseOpacity = building.landmark ? 0.9 : 0.8;
        
        const adjustedColor = `rgba(${r}, ${g}, ${b}, ${baseOpacity * face.brightness * brightnessMultiplier})`;
        
        ctx.fillStyle = adjustedColor;
        ctx.fill();
        
        // Add glow effect for front face - stronger for landmarks
        if (face.brightness > 0.9) {
          const glowIntensity = building.landmark ? 30 : 20;
          const glowOpacity = building.landmark ? 0.5 : 0.3;
          ctx.shadowColor = glowColor.replace('0.3', glowOpacity.toString());
          ctx.shadowBlur = glowIntensity;
          ctx.strokeStyle = glowColor;
          ctx.lineWidth = building.landmark ? 2 : 1;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
        
        // Special dome effect for Kigali Convention Centre
        if (building.name === "Kigali Convention Centre" && face.brightness > 0.8) {
          const centerX = (projected[0].x + projected[1].x) / 2;
          const centerY = (projected[0].y + projected[2].y) / 2;
          const domeRadius = width * projected[0].scale / 3;
          
          // Draw dome
          ctx.beginPath();
          ctx.arc(centerX, centerY - height * projected[0].scale / 2, domeRadius, Math.PI, 0);
          ctx.fillStyle = 'rgba(147, 51, 234, 0.4)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(147, 51, 234, 0.6)';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        
        // Special rooftop sign for Radisson Blue
        if (building.name === "Radisson Blue Hotel" && face.brightness > 0.8) {
          const signX = (projected[0].x + projected[1].x) / 2;
          const signY = projected[0].y - height * projected[0].scale / 2;
          const signWidth = width * projected[0].scale * 0.8;
          const signHeight = 8;
          
          // Radisson Blue sign
          ctx.fillStyle = '#0284c7';
          ctx.fillRect(signX - signWidth/2, signY - signHeight, signWidth, signHeight);
          ctx.fillStyle = 'white';
          ctx.font = `${10 * projected[0].scale}px Arial`;
          ctx.textAlign = 'center';
          ctx.fillText('RADISSON', signX, signY - 2);
        }
      });
      
      // Draw windows on front face
      if (projected[0].z > 0) { // Only draw if front face is visible
        const frontScale = projected[0].scale;
        const windowRows = Math.floor(windows / 4);
        const windowCols = 4;
        const windowWidth = width / (windowCols * 2.5);
        const windowHeight = height / (windowRows * 2.5);
        
        for (let row = 0; row < windowRows; row++) {
          for (let col = 0; col < windowCols; col++) {
            const windowX = centerX - width/2 + (col + 0.5) * (width / windowCols);
            const windowY = centerY - height/2 + (row + 0.5) * (height / windowRows);
            
            // Project window position
            const windowProjected = project3D(windowX, windowY, centerZ + depth/2, rotation);
            
            // Draw window
            ctx.fillStyle = `rgba(255, 255, 255, ${0.6 + Math.sin(time * 0.003 + row + col) * 0.3})`;
            ctx.fillRect(
              windowProjected.x - windowWidth * frontScale / 2,
              windowProjected.y - windowHeight * frontScale / 2,
              windowWidth * frontScale,
              windowHeight * frontScale
            );
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create pure black background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw all buildings
      buildings.forEach(building => {
        drawBuilding(building, time);
      });
      
      // Add atmospheric particles
      for (let i = 0; i < 50; i++) {
        const particleX = (Math.sin(time * 0.001 + i) + 1) * canvas.width / 2;
        const particleY = ((time * 0.1 + i * 20) % canvas.height);
        const particleSize = 1 + Math.sin(time * 0.002 + i) * 0.5;
        
        ctx.beginPath();
        ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 166, 35, ${0.3 + Math.sin(time * 0.003 + i) * 0.2})`;
        ctx.fill();
      }
      
      time += 16; // Approximate 60fps timing
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        opacity: 0.6,
        pointerEvents: 'none'
      }}
    />
  );
};

export default RwandanBuildings3D;
