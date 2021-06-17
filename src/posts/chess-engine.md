---
title: "Chess engine"
---
# Chess engine

For the project our group used Java our goal was to make a chess engine that could play chess to a decent level.

First part of the project was programming the logic around generating legal moves for the position. This was very complicated due to many overlapping rules and took most of the project to complete.

We also decided to make the chess engine compatible with UCI (Universal Chess Interface), which allowed us to pit two engines against each other in existing chess GUI's.

Evaluation consisted of counting the pieces for each player, these pieces were weighed as numerical values.

Best moves were picked with a alpha beta pruning recursion, our chess engine was able to play roughly at a 800-1000 elo level.

[Repository](https://github.com/Zerkath/rosemary-chess)