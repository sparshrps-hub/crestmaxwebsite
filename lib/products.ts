export type Part = {
  name: string;
  category: string;
  models: string[];
};

export type ModelSlug = "bajaj-boxer" | "tvs-hlx" | "ct100" | "bajaj-re" | "tvs-king";

export const twoWheelerParts: Part[] = [
  // Engine & Drivetrain
  { name: "Piston Kits", category: "Engine & Drivetrain", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Piston Ring Sets", category: "Engine & Drivetrain", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Valve Kits", category: "Engine & Drivetrain", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Cam/Timing Chains", category: "Engine & Drivetrain", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Complete Gasket Sets", category: "Engine & Drivetrain", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Engine Oil Seal Kits", category: "Engine & Drivetrain", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  // Clutch & Transmission
  { name: "Clutch Plates (Friction Plate Set)", category: "Clutch & Transmission", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Clutch Cables", category: "Clutch & Transmission", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Clutch Levers", category: "Clutch & Transmission", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Gear Shift Levers", category: "Clutch & Transmission", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Kick Starter Levers", category: "Clutch & Transmission", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  // Brakes & Suspension
  { name: "Brake Shoes", category: "Brakes & Suspension", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Brake Levers", category: "Brakes & Suspension", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Fork Seals", category: "Brakes & Suspension", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Rear Shock Absorber Bushes", category: "Brakes & Suspension", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Swing Arm Bush Kits", category: "Brakes & Suspension", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  // Filters & Fuel
  { name: "Air Filters", category: "Filters & Fuel", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Oil Filters", category: "Filters & Fuel", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Fuel Taps", category: "Filters & Fuel", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Carburetor Repair Kits", category: "Filters & Fuel", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Spark Plugs", category: "Filters & Fuel", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  // Electrical & Ignition
  { name: "CDI Units", category: "Electrical & Ignition", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Rectifiers", category: "Electrical & Ignition", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Ignition Coils", category: "Electrical & Ignition", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Magnet/Stator Coils", category: "Electrical & Ignition", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Wiring Harnesses", category: "Electrical & Ignition", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  // Lights & Indicators
  { name: "Headlight Assemblies", category: "Lights & Indicators", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Indicator Assemblies", category: "Lights & Indicators", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Horns", category: "Lights & Indicators", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  // Controls & Cables
  { name: "Accelerator Cables", category: "Controls & Cables", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Speedometer Cables", category: "Controls & Cables", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  // Drive & Wheels
  { name: "Chain Sprocket Kits", category: "Drive & Wheels", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Wheel Bearings", category: "Drive & Wheels", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  // Body & Rubber
  { name: "Rubber Grommets", category: "Body & Rubber", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
  { name: "Footrest Rubbers", category: "Body & Rubber", models: ["Bajaj Boxer", "TVS HLX", "CT100"] },
];

export const bajajReParts: Part[] = [
  // Drivetrain & Propeller
  { name: "Propeller Shaft Assembly", category: "Drivetrain & Propeller", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Slider Block Kit", category: "Drivetrain & Propeller", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Slider Block", category: "Drivetrain & Propeller", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Propeller Shaft Pin", category: "Drivetrain & Propeller", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Flange Assembly – Satellite Side", category: "Drivetrain & Propeller", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Flange Assembly – Differential Side", category: "Drivetrain & Propeller", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Flange Wheel Side", category: "Drivetrain & Propeller", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Rubber Bellow / Axle Boot", category: "Drivetrain & Propeller", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  // Differential & Rear Axle
  { name: "Differential Housing", category: "Differential & Rear Axle", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Rear Hub Bearing Set", category: "Differential & Rear Axle", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Pivot Pin", category: "Differential & Rear Axle", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  // Engine & Transmission
  { name: "Piston Kits", category: "Engine & Transmission", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Complete Gasket Sets", category: "Engine & Transmission", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Engine Oil Seal Kits", category: "Engine & Transmission", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Flywheel Ring Gear", category: "Engine & Transmission", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Bendix Drive", category: "Engine & Transmission", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  // Clutch & Brakes
  { name: "Clutch Cable", category: "Clutch & Brakes", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Clutch Plates", category: "Clutch & Brakes", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Brake Shoes", category: "Clutch & Brakes", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Brake Pipe", category: "Clutch & Brakes", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  // Suspension
  { name: "Rear Shock Absorber", category: "Suspension", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Fork Seals", category: "Suspension", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  // Filters & Fuel
  { name: "Air Filters", category: "Filters & Fuel", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Oil Filters", category: "Filters & Fuel", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  { name: "Fuel Taps", category: "Filters & Fuel", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
  // Bearings & Seals
  { name: "Wheel Bearings", category: "Bearings & Seals", models: ["Bajaj RE", "Tuk Tuk", "Keke Napep"] },
];

export const tvsKingParts: Part[] = [
  // Drivetrain
  { name: "Axle Shaft Boot", category: "Drivetrain", models: ["TVS King"] },
  { name: "Bevel Gear", category: "Drivetrain", models: ["TVS King"] },
  { name: "Bendix Drive", category: "Drivetrain", models: ["TVS King"] },
  // Brakes
  { name: "Brake Shoes", category: "Brakes", models: ["TVS King"] },
  { name: "Brake Pipe", category: "Brakes", models: ["TVS King"] },
  // Engine
  { name: "Flywheel Ring Gear", category: "Engine", models: ["TVS King"] },
  { name: "Piston Kits", category: "Engine", models: ["TVS King"] },
  { name: "Gasket Sets", category: "Engine", models: ["TVS King"] },
  { name: "Engine Oil Seals", category: "Engine", models: ["TVS King"] },
  // Clutch
  { name: "Clutch Plates", category: "Clutch", models: ["TVS King"] },
  { name: "Clutch Cable", category: "Clutch", models: ["TVS King"] },
  // Filters & Fuel
  { name: "Air Filters", category: "Filters & Fuel", models: ["TVS King"] },
  { name: "Oil Filters", category: "Filters & Fuel", models: ["TVS King"] },
  { name: "Fuel Taps", category: "Filters & Fuel", models: ["TVS King"] },
  // Bearings & Seals
  { name: "Wheel Bearings", category: "Bearings & Seals", models: ["TVS King"] },
  { name: "Axle Bearings", category: "Bearings & Seals", models: ["TVS King"] },
];

export const partsByModel: Record<ModelSlug, Part[]> = {
  "bajaj-boxer": twoWheelerParts,
  "tvs-hlx": twoWheelerParts,
  "ct100": twoWheelerParts,
  "bajaj-re": bajajReParts,
  "tvs-king": tvsKingParts,
};
