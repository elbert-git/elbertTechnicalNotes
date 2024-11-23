#  Python - OpenCV
General![An Introduction to Computer Vision With OpenCV - Analytics Vidhya](Python - OpenCV_29368python-op.jpg)
---------------------------------------------------------------------------------------------------------------

Open cv is a computer vision utility library. It's used to manipulate images to prep them for processing. For machine learning or other kinds of visual analyses

### Source

[https://www.youtube.com/playlist?list=PLzMcBGfZo4-lUA8uGjeXhBUUzPYc6vZRn](https://www.youtube.com/playlist?list=PLzMcBGfZo4-lUA8uGjeXhBUUzPYc6vZRn)

Installation and Import
-----------------------

```text-plain
pip install python-opencv
```

```text-plain
import cv2
```

Understanding how openCV handles images
---------------------------------------

### It's all arrays

it's just a 2d numpy array. There is a BGR array for every pixel. All fit into a large 2d array. ;

### BGR not RGB

idk why it just is. the channel array is Blue, Green, then Red

Basic usage
-----------

### Reading images

```text-plain
img = cv2.imread('path/to/image', {colorspace})
```

For colorspace you can pick in color, grayscale or unchanged (with alpha). Fill in the argument with this

*   cv2.IMREAD\_COLOR
*   cv2.IMREAD\_GRAYSCALE
*   cv2.IMREAD\_UNCHANGED

### Displaying images

```text-plain
imshow({img})
cv2.waitKey(0) # wait in milliseconds before closing window
cv2.destroy all windows #close all windows11111111111115 
```

map (todo)
----------

*   new page drawing lines and shapes
*   masking