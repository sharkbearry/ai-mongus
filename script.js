// JavaScript source code

// main_stream is for webcam

// available_models has name, vers, video, conf, imgGrid

//propagate model_select w avail models

var model_name = "amongus2_0";
var model_vers = 2;
const API_KEY = "rf_u9ZrdhV88sbVpYmrFngn3vfFOOB3";
// do i need detect_api_key ??
var no_detection_count = 0;
var canvas_painted = false;
var all_predictions = [];


import { InferenceEngine } from "inferencejs";
const inferEngine = new InferenceEngine();
// newhome.js uses this:
// const inferEngine = new inferencejs.InferenceEngine();

// const workerId = await inferEngine.startWorker("[model name], "[version]", "[publishable key]");

const workerId = await inferEngine.startWorker("amongus2_0", "2", "rf_u9ZrdhV88sbVpYmrFngn3vfFOOB3");
const image = document.getElementById("image")
const predictions = await inferEngine.runInference(workerId, image);