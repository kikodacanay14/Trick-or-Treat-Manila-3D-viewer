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

## Rules for agents

Claude and Codex chats follow `CLAUDE.md` here, including Kiko's "BSE development instructions" (25 Nov 2026): the
Delivery Board (https://claude.ai/artifact/VDVXsxnpX36S91w8PXEauP) is the tracker and its Decisions tab holds approved
rules; approvals and questions for Kiko go through Concord; files go in the BSE Apps & Systems shared Drive.
