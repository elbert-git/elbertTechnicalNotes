# Text To Art
Text To Art 
------------

The killer feature is obviously using the text to art feature. just type in prompts and generate. 

### Creating Prompts

You can look up [lexica](https://lexica.art/) to get a better intuition on prompts. Note that

*   distinct prompts are separated by commas
*   first prompts have more emphasis on the iamge
*   you can surround a word with parenthesis for manual emphasis

Generally it's kinda like 

```text-plain
{subject}, {descriptive tags}, {descriptive tags}, ...{descriptive tags}
```

### Generation settings

| Setting | Explanation | Recommended settings |
| --- | --- | --- |
| Samplers | For you just think of it like rendering denoising.  <br>Different algorithms will resample differently | Just use K\_LMS |
| Steps | The more you times you denoise an image  <br>to get sharper and clearer images | Just use ~50 |
| Seed | If you want to get consistent results you use the same seed | you can use any number you want  <br>but use `-1` for random |
| Image size | how big you want the images to be | just use 512x512, that's how stable  <br>diffusion was trained |
| Grid and batches | How many images to generate every time you press ‘generate’ | just use a 2x2 grid. should be more than enough |
| CFG Scale | Controls how closely the generator follows the prompt. | around 50 is generally average, but play around!! |
| Restore faces | Might help to improve faces | try around sometimes it works and not |