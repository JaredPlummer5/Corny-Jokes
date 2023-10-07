import { Component } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-ml-comp',
  templateUrl: './ml-comp.component.html',
  styleUrls: ['./ml-comp.component.css']
})
export class MLCompComponent {
  prediction!: string;
  model: any;


  async loadImage(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;

    if (!files || files.length === 0) {
      console.error('No files selected.');
      return;
    }

    const imageFile = files[0];

    try {
      // Load the model if not already loaded
      if (!this.model) {
        this.model = await tf.loadLayersModel('/assets/model.json');
      }

      // Create an HTMLImageElement from the File object
      const image = new Image();
      const reader = new FileReader();
      reader.onload = async (e) => {
        image.src = e.target?.result as string;

        // Wait for the image to load
        image.onload = async () => {
          // Preprocess the image
          const tensor = tf.browser.fromPixels(image)
            .resizeNearestNeighbor([224, 224])
            .toFloat()
            .expandDims();

          // Make a prediction
          const predictionTensor = this.model.predict(tensor) as tf.Tensor;
          const predictions = await predictionTensor.data();
          const index = predictions.indexOf(Math.max(...predictions));

          // Update the UI with the prediction
          this.prediction = this.getClassName(index);
        };
      };
      reader.readAsDataURL(imageFile);
    } catch (error) {
      console.error('Error during image processing or prediction:', error);
    }
  }


  getClassName(index: number) {
    const classNames = [
      'airplane', 'automobile', 'bird', 'cat',
      'deer', 'dog', 'frog', 'horse', 'ship', 'truck'
    ];

    return classNames[index];
  }
}
