---
layout: post
title: 16:1 Planetary Gearbox
image: /assets/planetary-gearbox/exploded-view-3.png
summary: A two-stage 16:1 planetary gearbox designed for NEMA 17 stepper motors, featuring a fully 3D-printed transmission optimized for FDM manufacturing with 0.2 mm backlash. The prototype was driven using an Arduino and TMC2209 stepper driver at 12 V, with a typical current draw of approximately 0.5 A during testing. The next stage of the project is integrating a magnetic encoder to enable closed-loop PID position control.
---

A two-stage 16:1 planetary gearbox designed for NEMA 17 stepper motors, featuring a fully 3D-printed transmission optimized for FDM manufacturing with 0.2 mm backlash. The prototype was driven using an Arduino and TMC2209 stepper driver at 12 V, with a typical current draw of approximately 0.5 A during testing. 

Ongoing work: This project is still under active development. Future updates will cover the integration of a magnetic encoder for closed-loop PID position control, gearbox performance and efficiency characterization, torque testing under different loads, and the overall design process behind the encoder integration and control system. Till then, here are some images of the project!

---

# Final Prototype

![Final Prototype](/assets/planetary-gearbox/img1.jpg)

The completed gearbox mounted to a NEMA 17 stepper motor. The housing is split into two sections, with each section containing one internally toothed ring gear, allowing the two planetary stages to be packaged into a assembly while simplifying printing and assembly.

---

![Gear Train](/assets/planetary-gearbox/img5.jpg)

Close-up of the two-stage planetary reduction. Each stage provides a **4:1** reduction, resulting in an overall **16:1** gearbox. The sun and planet gears each have **15 teeth**, while the ring gear has **45 internal teeth**. All gears use a **15° helix angle**, **22° pressure angle**, **module 1.5**, and **0.2 mm backlash**, selected through multiple print iterations to achieve smooth gear meshing.

---

![Planet Carrier](/assets/planetary-gearbox/img7.jpg)

Brass heat-set inserts are used throughout the housing to provide durable threaded connections, allowing repeated assembly and disassembly without damaging the printed components.

---

![Housing Assembly](/assets/planetary-gearbox/img6.jpg)

The stacked planet carrier assembly. Each carrier uses hardened dowel pins as planet shafts together with sleeve bearings to reduce friction and provide smooth rotation under load.
---

# Exploded View

![Exploded View](/assets/planetary-gearbox/exploded-view-3.png)

Exploded CAD model showing the complete drivetrain, including the housing, planet carriers, gear train, bearings, fasteners, and motor.

---

# Schematic

![Schematic](/assets/planetary-gearbox/basic-schematic.png)

Motor test setup

The gearbox was initially tested using an **Arduino Uno** and a **TMC2209** stepper driver operating from a bench power supply set to 12V. The test firmware generates STEP and DIR signals directly from the Arduino to verify gearbox operation.

> **Arduino Test Program**
>
> ```cpp
> // Pin Definitions
> #define EN_PIN 8    // LOW: Driver enabled, HIGH: Driver disabled
> #define STEP_PIN 9  // Step on the rising edge
> #define DIR_PIN 10  // Set stepping direction
>
> int noOfSteps = 5000;
> int microSecondsDelay = 1000;
>
> void setup() {
>   pinMode(EN_PIN, OUTPUT);
>   pinMode(STEP_PIN, OUTPUT);
>   pinMode(DIR_PIN, OUTPUT);
>
>   digitalWrite(EN_PIN, LOW);
>   digitalWrite(DIR_PIN, LOW);
> }
>
> void loop() {
>   digitalWrite(DIR_PIN, LOW);
>   moveSteps(noOfSteps);
>
>   digitalWrite(DIR_PIN, HIGH);
>   moveSteps(noOfSteps);
> }
>
> void moveSteps(int steps) {
>   for (int i = 0; i < steps; i++) {
>     digitalWrite(STEP_PIN, HIGH);
>     delayMicroseconds(microSecondsDelay);
>     digitalWrite(STEP_PIN, LOW);
>     delayMicroseconds(microSecondsDelay);
>   }
> }
> ```
