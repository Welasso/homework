<?php
function wordHome($tag, $content)
{
    echo "<$tag>$content<$tag>";
}
echo wordHome('h3', 'Привет мир');
echo wordHome('p', 'word php');
