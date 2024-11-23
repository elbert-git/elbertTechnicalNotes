# Reading Videos and Images
Reading Images
--------------

```text-plain
# show the image
cv.imshow('path/to/image', img)
# prevent the program from automatically escaping/progressing
cv.waitKey(0)
```

Reading Videos
--------------

```text-plain
# get video stream
capture = cv.videoCapture('path/to/video')
webcamCapture = cv.videoCapture(0) # arg is camera index

# show the video; One frame at a time
while True:
    isTrue, frame = capture.read()
    cv.imshow('video', frame)
    if(cv.waitKey(20) & 0xFF==ord('d')):
        break

capture.release()
cv.destroyAllWindows()

cv.waitKey(0)
```