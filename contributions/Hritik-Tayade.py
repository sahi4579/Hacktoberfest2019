#!/bin/python3
#This is an Athlete Sort implementation in python
#I solved this problem in an programming competition , this was the first i had so much fun programming
import math
import os
import random
import re
import sys



if __name__ == '__main__':
    nm = input().split()

    n = int(nm[0])

    m = int(nm[1])

    arr = []

    for _ in range(n):
        arr.append(list(map(int, input().rstrip().split())))

    k = int(input())
    for i in range(len(arr)):
        for j in range(i,len(arr),+1):
            
            if(arr[i][k] > arr[j][k]):
               
                someval = arr[j]
                for ll in range(j,i,-1):
                    arr[ll] = arr[ll-1]
                    
                arr[i] = someval
           
        
    for i in range(len(arr)):
        s = str(arr[i])
        s = s.replace("[","")
        s = s.replace("]","")
        s = s.replace(",","")
        print(s)
    
