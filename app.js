const viewer = document.querySelector("#floor-plan-viewer");
const viewerFrame = document.querySelector("#viewer-frame");
const loadingCard = document.querySelector("#loading-card");
const loadingProgress = document.querySelector("#loading-progress");
const loadingFill = document.querySelector("#loading-fill");
const loadingPercent = document.querySelector("#loading-percent");
const errorCard = document.querySelector("#error-card");
const fullscreenLabel = document.querySelector("#fullscreen-label");

const initialView = Object.freeze({
  orbit: "32deg 58deg auto",
  target: "auto auto auto",
  fieldOfView: "30deg",
});

viewer.addEventListener("progress", ({ detail }) => {
  const percentage = Math.round((detail?.totalProgress ?? 0) * 100);
  loadingFill.style.width = `${percentage}%`;
  loadingPercent.textContent = `${percentage}%`;
  loadingProgress.setAttribute("aria-valuenow", String(percentage));
});

viewer.addEventListener("load", () => {
  loadingFill.style.width = "100%";
  loadingPercent.textContent = "100%";
  loadingProgress.setAttribute("aria-valuenow", "100");
  loadingCard.hidden = true;
});

viewer.addEventListener("error", () => {
  loadingCard.hidden = true;
  errorCard.hidden = false;
});

document.querySelector("#reset-view").addEventListener("click", () => {
  viewer.cameraOrbit = initialView.orbit;
  viewer.cameraTarget = initialView.target;
  viewer.fieldOfView = initialView.fieldOfView;
  viewer.resetTurntableRotation();
  viewer.jumpCameraToGoal();
});

document.querySelector("#fullscreen").addEventListener("click", async () => {
  if (document.fullscreenElement) {
    await document.exitFullscreen();
  } else {
    await viewerFrame.requestFullscreen();
  }
});

document.addEventListener("fullscreenchange", () => {
  fullscreenLabel.textContent = document.fullscreenElement ? "Exit fullscreen" : "Fullscreen";
});
