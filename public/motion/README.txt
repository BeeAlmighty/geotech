MOTION SAMPLE REEL — drop your motion-graphics video here.

Save your sample in THIS folder as exactly:
    reel.mp4          (the video — required)
    reel-poster.jpg   (a still frame shown before play — optional but nice)

It then plays inside the framed player in the "Motion design" section of the
homepage. (Paths referenced in src/components/marketing/MotionShowcase.tsx.)

Recommended:
  • MP4 (H.264 / AAC) — the most universally supported format
  • Portrait 9:16 fits the frame best (e.g. 1080 x 1920); landscape works too
  • Keep it SHORT and SMALL: aim for under ~10–15 MB. Long/large files bloat
    the git repo and slow the deploy. Trim to the 10–20s that sells it, and
    compress (e.g. handbrake.fr) before adding.

If reel.mp4 is missing, the frame falls back to the animated placeholder —
no broken player.

PREFER NOT TO COMMIT A LARGE FILE?
  Host it on YouTube/Vimeo instead and embed it. Ask and I'll swap the <video>
  for a lightweight, lazy-loaded embed in MotionShowcase.tsx.
