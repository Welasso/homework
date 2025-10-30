<?php
function createElements($tag, $content, $count)
{
    for ($i = 0; $i < $count; $i++) {
        echo "<$tag>$content.$count</$tag>";
    }
}
createElements('p', 'Привет, это повторяющийся абзац!', 3);
createElements('h2', 'Повторяющийся заголовок', 2);
