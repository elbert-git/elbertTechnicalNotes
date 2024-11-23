# Creating Video Scrollies
Just the ffmpeg settings
------------------------

```text-plain
ffmpeg -i /path/to/your/video/input.mp4 -c:v libx264 -preset veryslow -crf 22 -r 60 -g 1 -keyint_min 1 -sc_threshold 0 /path/to/your/video/input-encoded.mp4
```