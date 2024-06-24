#include <stdio.h>

int bitWise(int a, int b){
    while (b != 0)
    {
        int carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}

int main(){
    printf("%d\n", bitWise(4, 6));
    return 0;
}