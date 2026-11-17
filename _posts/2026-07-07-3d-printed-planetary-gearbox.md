---
layout: post
title: 16:1 Planetary Gearbox
date: 2026-07-07
math: true
image: /assets/planetary-gearbox/exploded-view-3.png
summary: A two-stage 16:1 3D printed helical planetary gearbox for NEMA 17 steppers, and how I took it from jamming with 15° of backlash to running smoothly!
---
<style>
.project-gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin: 1.5rem 0 2.5rem;
}

.project-gallery img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.video-wrap {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin: 1.5rem 0 2.5rem;
}

.video-wrap iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

**TL;DR:** a two-stage, 16:1 helical planetary gearbox for NEMA 17 steppers, fully 3D printed except for bearings, dowel pins and heat-set inserts. My first version jammed and had **15° of backlash**. I traced the jamming to a wrong pitch-diameter formula, fixed it, worked out the print tolerances, and got backlash down to a barely noticeable amount. I'm reusing this design for the joints of my [3D printed robotic arm]({% post_url 2026-08-15-6dof-robotic-arm %}).

<!-- TODO: put a measured final backlash number here, e.g. "from 15° to ~X°" -->

![Final Prototype](/assets/planetary-gearbox/img1.jpg)

<div class="video-wrap">
  <iframe
    src="https://www.youtube.com/embed/SmnXMEgoI9o"
    title="Some precision testing!"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

## Design

- **Ratio:** two stacked 4:1 planetary stages = **16:1**
- **Gears:** 15T sun, 15T planets, 45T ring (stage ratio = 1 + 45/15 = 4)
- **Gear parameters:** module 1.5, 15° helix angle, 22° pressure angle, 0.2 mm backlash
- **Motor and driver:** NEMA 17 stepper with a TMC2209 driver controlled by an Arduino, at 12 V and about 0.5 A while testing
- **Hardware:** brass heat-set inserts in the housing, hardened dowel pins as planet shafts, and sleeve bearings in the planets

Each housing section holds one internal ring gear, so the two stages stack on top of each other and every part prints flat.

![Exploded View](/assets/planetary-gearbox/exploded-view-3.png)

![Gear Train](/assets/planetary-gearbox/img5.jpg)

## Version 1: it jammed

My first print (July 1) had a few problems at once:

- **The gears jammed**, even with 0.2 mm of backlash designed in. The sun-to-planet gap also looked much tighter than the planet-to-ring gap.
- **The ring gear had the wrong handedness.** I modelled a left-hand helical gear and cut it out of the housing to make the internal ring. Cutting a gear out of a solid flips its handedness, so the ring came out right-handed and no longer meshed. To fix it I made the planets right-handed and the sun left-handed.
- **Loose bearing fits, holes for the heat-set inserts that were too small, and no washers**, which left a lot of axial play.
- **The sun gear shaft deformed** when I stalled the gearbox. The motor didn't stall first, so the printed shaft was the weakest part of the whole drivetrain.

To measure how bad it was, I put an **AS5600 magnetic encoder** on the output and drove the motor from an Arduino with a TMC2209. The first version had **15° of backlash**.

![Test rig with the AS5600 encoder on the output](/assets/planetary-gearbox/log/log-test-rig.jpg)

## Why it jammed: transverse vs. normal module

In CAD, the sun-to-planet centre distance didn't match the planet-to-ring centre distance. I had placed the gears using the spur gear formula:

$$d = m_n z = 1.5 \times 15 = 22.5\ \text{mm}$$

For a **helical** gear, the pitch diameter uses the *transverse* module, not the normal module that you type into the gear generator:

$$m_t = \frac{m_n}{\cos\beta} = \frac{1.5}{\cos 15^\circ} \approx 1.553 \qquad d = m_t z \approx 23.29\ \text{mm}$$

Because the sun and planets have the same tooth count, the sun-to-planet centre distance equals one pitch diameter, so my planets were placed about **0.8 mm** too close to the sun. That was enough to jam the mesh. Once I placed the gears using the transverse pitch diameter, all the gaps were equal.

![CAD showing the mismatched gaps and the calculation](/assets/planetary-gearbox/log/log-radius-error.jpg)

## Fixing it

With the geometry fixed, everything after that was about print tolerances:

- **Chamfered gears** (1 mm) and a **bore 0.05 mm larger**. After this the gear train finally felt smooth.
- **Set-screw holes** in the sun gear so it can't slip on the motor shaft.
- **Carrier spacing:** I cut the free space around the planets from 3 mm to 1 mm on each side and added 2 mm spacers to hold the dowel pins in place.

![Chamfered gears with a slightly larger bore](/assets/planetary-gearbox/log/log-chamfered-gears.jpg)

![The fixed gear train: feels very smooth](/assets/planetary-gearbox/log/log-smooth.jpg)

![Set-screw holes added to the sun gear](/assets/planetary-gearbox/log/log-set-screw.jpg)

![Carrier spacing and dowel pin spacers](/assets/planetary-gearbox/log/log-carrier-spacing.jpg)

### Bore tolerances

Two bores with the same CAD dimension came out different. One bearing fit loose and the other fit perfectly. The difference was how they printed: a bore sitting on the build plate came out at the right size, but a bore printed on supports warped and came out smaller. So I printed a set of test bores for the 15 × 24 mm bearing:

| Bore diameter (mm) | Fit |
|---|---|
| 14.95 | loose |
| 15.05 | loose |
| **15.15** | **good fit** |
| 15.25 | very tight |

Wrapping tape around a loose fit works as a quick fix, but the concentricity errors add up across stages. Next time I want to try **spring-style (compliant) bores** that grip the bearing and are less sensitive to FDM tolerances.

![Bore tolerance issue](/assets/planetary-gearbox/log/log-bore-issue.jpg)

![Bore test results and the spring-fit idea](/assets/planetary-gearbox/log/log-bore-table.jpg)

![Tolerance hell](/assets/planetary-gearbox/log/log-tolerance-hell.jpg)

### Measuring backlash with an angle dial

To check repeatability without the encoder, I added an **angle dial to the back plate** (45° increments) and a pointer on the output shaft. The first dial needed too many supports, so I redesigned it with a raised pointer that's easier to read. With all the fixes in, backlash dropped from 15° to a barely noticeable amount.

![Angle dial and output pointer](/assets/planetary-gearbox/log/log-angle-dial-v2.jpg)

![Very minor backlash on the final version](/assets/planetary-gearbox/log/log-minor-backlash.jpg)

## Final build

![Planet Carrier](/assets/planetary-gearbox/img7.jpg)

![Housing Assembly](/assets/planetary-gearbox/img6.jpg)

![All the parts](/assets/planetary-gearbox/log/log-parts.jpg)

## What I learned

- For helical gears, the gear generator's module is the **normal** module. Use the **transverse** module for anything that sets centre distances.
- Cutting a helical gear out of a solid **flips its handedness**.
- Bore size depends on **how the bore is printed**, not just on the CAD dimension. Test-print the fits before printing the full part.
- Measure first. The encoder test showed that "it feels loose" actually meant 15° of backlash.

## Next steps

- Measure **output torque** and see what fails first now that the sun shaft is stronger
- Get a measured backlash number for the final version
- Try the spring-fit bores

<!-- Test firmware based on https://circuitdigest.com/microcontroller-projects/interfacing-TMC2209-stepper-motor-driver-with-arduino-uno-basic-direction-and-stepping-control -->
