# Git LFS
**Git LFS**
-----------

*   Why LFS

Cause github doesn't want to track large files. it will just track a url to the files. There won't be a large

*   setup lfs

```text-plain
git lfs install
```

*   choose which file types to track

```text-plain
git lfs track "*.psd"
git lfs track "*.png"
git lfs track "*.jpg"
git lfs track "*.blend"
git lfs track "*.gltf"
git lfs track "*.obj"
git lfs track "*.fbx"
```

*   let git track .gitattribures file

```text-plain
git add .gitattributes
```