# Design Guild Demo 4 - Staggered Text Panels
![Preview](https://github.com/SimonLTheodo/Design-Guild-Demo-4---Staggered-Text-Panels/blob/main/public/Staggered%20Text%20Panels.gif)

A quick demonstration of staggered text in 4 panels aligning into one seamless block of text, demonstrated on https://maelanlemeur.com/
<img width="1512" alt="image" src="https://user-images.githubusercontent.com/113339746/222218978-9d6c33d4-90b4-401e-be43-9cab6bf8a723.png">

This demo utilises absolute positioning and hidden overflow to create 4 divs with 25% width with hidden overflow, each containing a div the size of the full screen with the text inside.

The left positioning for the contents of each panel is different, but when the button is toggled on, this value is set to be the same for all text.

The animated text is unselectable, but when the button is toggled on, a transparent body of text in the same position is enabled, allowing the user to select it.

The animation is achieved via the transition property, with the snappy effect being due to a custom timing function, created with https://cubic-bezier.com/#.69,-0.03,.17,1.04
