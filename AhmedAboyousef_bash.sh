#!/bin/bash

# new: this file will store the Bash script results
output_file="AhmedAboyousef_bash_report.txt"

# new: this variable stores the total number of comments found
total=0

echo "New learning comments report" > $output_file
echo "----------------------------" >> $output_file

# new: this checks each project file one by one
for file in index.html cv.html style.css app.js
do
    count=$(grep -c "new:" "$file")

    echo "$file: $count"
    echo "$file: $count" >> $output_file

    total=$((total + count))
done

echo "----------------------------" >> $output_file
echo "Total comments: $total" >> $output_file

echo "----------------------------"
echo "Total comments: $total"
echo "Report saved in $output_file"