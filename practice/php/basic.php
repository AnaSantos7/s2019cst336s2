<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>
    <body>
        <table>
            <th>number</th>
            <th>odd/even</th>
            <tr>
        </table>
        <?php
            echo "<!-- This is a comment written in PHP -->";
            
            for($i=0; $i<9; $i++){
                $n = rand(0,100);   
                echo $n  . "<br><br>";
                // $odd_or_even = ($n % 2 == 0)?"even":"odd";
                // echo $odd_or_even  . "<br><br>";
            }
        ?>
    </body>
</html>