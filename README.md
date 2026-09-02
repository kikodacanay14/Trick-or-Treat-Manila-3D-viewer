# Trick or Treat Manila interactive 3D viewer

A static GitHub Pages viewer for the Trick or Treat Manila event floor plan,
built with Google's `<model-viewer>` web component.

## Controls

- Rotate: drag with a mouse or one finger
- Zoom: mouse wheel or pinch
- Pan: right-drag, Shift-drag, or two fingers
- Reset view: restores the initial camera position
- Fullscreen: expands the viewer across the display

The committed GLB is a web-specific export from the original Blender scene.
Its floor layering is adjusted for browser rendering, the grass carpet is
opaque, and the stage deck uses a visible web-safe material. Door Boolean
openings are baked into the export, while Boolean cutter helpers are excluded.
The original Blender file remains untouched.

GitHub Pages publishes the viewer through the repository workflow.
