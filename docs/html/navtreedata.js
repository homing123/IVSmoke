/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "IVSmoke", "index.html", [
    [ "IVSmoke Quick Start Guide", "index.html", "index" ],
    [ "Collision Component Guide", "md_docs_2pages_2_collision_component_2_collision_component_guide.html", [
      [ "Overview", "md_docs_2pages_2_collision_component_2_collision_component_guide.html#autotoc_md25", [
        [ "How It Works: Greedy Meshing To maintain high performance, the component <b>does not</b> create a collision box for every single voxel. Instead, it utilizes a <b>Binary Greedy Meshing</b> algorithm.", "md_docs_2pages_2_collision_component_2_collision_component_guide.html#autotoc_md26", null ]
      ] ],
      [ "Common Use Cases", "md_docs_2pages_2_collision_component_2_collision_component_guide.html#autotoc_md28", [
        [ "1. Blocking AI Line of Sight (Default)", "md_docs_2pages_2_collision_component_2_collision_component_guide.html#autotoc_md29", null ],
        [ "2. Physical Blockage", "md_docs_2pages_2_collision_component_2_collision_component_guide.html#autotoc_md30", null ]
      ] ],
      [ "Configuration", "md_docs_2pages_2_collision_component_2_collision_component_guide.html#autotoc_md32", [
        [ "Performance Throttling", "md_docs_2pages_2_collision_component_2_collision_component_guide.html#autotoc_md33", null ]
      ] ],
      [ "Debugging", "md_docs_2pages_2_collision_component_2_collision_component_guide.html#autotoc_md35", null ]
    ] ],
    [ "Custom Material Guide", "md_docs_2pages_2_custom_material_2_custom_material_guide.html", [
      [ "Material", "md_docs_2pages_2_custom_material_2_custom_material_guide.html#autotoc_md39", [
        [ "Demo Example", "md_docs_2pages_2_custom_material_2_custom_material_guide.html#autotoc_md40", null ]
      ] ],
      [ "ProjectSetting Rendering", "md_docs_2pages_2_custom_material_2_custom_material_guide.html#autotoc_md42", null ],
      [ "Example", "md_docs_2pages_2_custom_material_2_custom_material_guide.html#autotoc_md44", null ]
    ] ],
    [ "Global Settings Guide", "md_docs_2pages_2_global_settings_2_global_settings_guide.html", [
      [ "General", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md48", null ],
      [ "Quality", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md50", null ],
      [ "Global Quality Presets", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md51", null ],
      [ "Custom Quality Mode", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md52", null ],
      [ "Ray March Quality", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md53", null ],
      [ "Self-Shadow Quality", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md54", null ],
      [ "External Shadow Quality", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md55", null ],
      [ "Performance Impact", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md56", null ],
      [ "Appearance", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md58", null ],
      [ "Advanced Options (Show Advanced Options = true)", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md59", null ],
      [ "Lighting", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md61", null ],
      [ "Advanced Options (Show Advanced Options = true)", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md62", null ],
      [ "Shadows", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md64", null ],
      [ "Self Shadows", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md65", null ],
      [ "External Shadows", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md66", null ],
      [ "Post Processing", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md68", null ],
      [ "Rendering", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md70", null ],
      [ "Render Pass Options", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md71", null ],
      [ "Visual Alpha Type Options", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md72", null ],
      [ "Debug", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md74", null ],
      [ "Smoke Preset", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md76", [
        [ "Creating a Smoke Preset", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md77", null ],
        [ "Preset Properties", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md78", null ],
        [ "Applying a Preset", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md79", null ],
        [ "Preset Examples", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md80", null ]
      ] ],
      [ "Translucent / Custom Depth", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md82", [
        [ "The Problem", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md83", null ],
        [ "The Solution: Custom Depth Sorting", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md84", null ],
        [ "Setup Steps", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md85", null ],
        [ "Step 1: Configure IVSmoke Settings", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md86", null ],
        [ "Step 2: Configure Translucent Material", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md87", null ],
        [ "Step 3: Enable Custom Depth on Each Components", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md88", null ],
        [ "Step 4: Enable Project Custom Depth", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md89", null ],
        [ "Step 5: Set Opacity Mask Clip Value (Optional)", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md90", null ],
        [ "How It Works", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md91", null ],
        [ "Performance Considerations", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md92", null ]
      ] ],
      [ "Editor Preview", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md94", [
        [ "Starting Preview", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md95", null ],
        [ "Stopping Preview", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md96", null ],
        [ "Debug Visualization Options", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md97", null ],
        [ "Preview Workflow Tips", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md98", null ],
        [ "Limitations", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md99", null ]
      ] ],
      [ "Stat IVSmoke", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md101", [
        [ "Enabling Stats", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md102", null ],
        [ "Available Statistics", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md103", null ],
        [ "Memory Stats (GPU VRAM)", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md104", null ],
        [ "Cycle Stats (CPU/GPU Time)", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md105", null ],
        [ "Counter Stats", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md106", null ],
        [ "Using with Unreal Insights", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md107", null ]
      ] ],
      [ "Best Practices", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md109", [
        [ "Recommended Level Placement", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md110", null ],
        [ "Spacing and Distribution", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md111", null ],
        [ "Volume Sizing", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md112", null ],
        [ "Performance Tips", "md_docs_2pages_2_global_settings_2_global_settings_guide.html#autotoc_md113", null ]
      ] ]
    ] ],
    [ "HoleGenerator Component Guide", "md_docs_2pages_2_hole_generator_component_2_hole_generator_component_guide.html", [
      [ "Explosion (Grenade)", "md_docs_2pages_2_hole_generator_component_2_hole_generator_component_guide.html#autotoc_md116", null ],
      [ "Penetration (Bullet)", "md_docs_2pages_2_hole_generator_component_2_hole_generator_component_guide.html#autotoc_md118", null ],
      [ "Create", "md_docs_2pages_2_hole_generator_component_2_hole_generator_component_guide.html#autotoc_md121", null ],
      [ "Usage", "md_docs_2pages_2_hole_generator_component_2_hole_generator_component_guide.html#autotoc_md123", [
        [ "<b>Selecting the Right Interaction Node</b>", "md_docs_2pages_2_hole_generator_component_2_hole_generator_component_guide.html#autotoc_md124", null ],
        [ "Before. Add UIVSmokeHoleRequestComponent", "md_docs_2pages_2_hole_generator_component_2_hole_generator_component_guide.html#autotoc_md125", null ],
        [ "Case A. Request Penetration Hole", "md_docs_2pages_2_hole_generator_component_2_hole_generator_component_guide.html#autotoc_md126", null ],
        [ "<b>Execution Timing</b>", "md_docs_2pages_2_hole_generator_component_2_hole_generator_component_guide.html#autotoc_md127", null ],
        [ "Case B. Request Explosion Hole", "md_docs_2pages_2_hole_generator_component_2_hole_generator_component_guide.html#autotoc_md128", null ],
        [ "<b>Execution Timing</b>", "md_docs_2pages_2_hole_generator_component_2_hole_generator_component_guide.html#autotoc_md129", null ],
        [ "Case C. Request Dynamic Hole", "md_docs_2pages_2_hole_generator_component_2_hole_generator_component_guide.html#autotoc_md130", null ],
        [ "<b>Execution Timing</b>", "md_docs_2pages_2_hole_generator_component_2_hole_generator_component_guide.html#autotoc_md131", null ]
      ] ]
    ] ],
    [ "Voxel Volume Guide", "_voxel_volume_guide.html", [
      [ "Core Concepts", "_voxel_volume_guide.html#autotoc_md133", [
        [ "Volumetric Flood-Fill", "_voxel_volume_guide.html#autotoc_md134", null ],
        [ "Deterministic Networking", "_voxel_volume_guide.html#autotoc_md135", null ]
      ] ],
      [ "Simulation Lifecycle", "_voxel_volume_guide.html#autotoc_md137", [
        [ "1. Expansion Phase", "_voxel_volume_guide.html#autotoc_md138", null ],
        [ "2. Sustain Phase", "_voxel_volume_guide.html#autotoc_md139", null ],
        [ "3. Dissipation Phase", "_voxel_volume_guide.html#autotoc_md140", null ],
        [ "4. Finished", "_voxel_volume_guide.html#autotoc_md141", null ]
      ] ],
      [ "Configuration Guidelines", "_voxel_volume_guide.html#autotoc_md143", [
        [ "Performance &amp; Resolution", "_voxel_volume_guide.html#autotoc_md144", null ],
        [ "Shape Control", "_voxel_volume_guide.html#autotoc_md145", null ],
        [ "Radii (Aspect Ratio)", "_voxel_volume_guide.html#autotoc_md146", null ],
        [ "Expansion Noise", "_voxel_volume_guide.html#autotoc_md147", null ]
      ] ],
      [ "Network Synchronization", "_voxel_volume_guide.html#autotoc_md149", [
        [ "Late-Join Handling (Fast Forwarding)", "_voxel_volume_guide.html#autotoc_md150", null ],
        [ "Time Synchronization", "_voxel_volume_guide.html#autotoc_md151", null ]
      ] ],
      [ "Interaction Components", "_voxel_volume_guide.html#autotoc_md153", null ],
      [ "Debugging", "_voxel_volume_guide.html#autotoc_md155", null ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_i_v_smoke_8_build_8cs_source.html",
"functions.html"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';