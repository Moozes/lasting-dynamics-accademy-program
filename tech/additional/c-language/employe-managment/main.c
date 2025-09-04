#include<stdio.h>
#include<string.h>

struct Employee {
    char fullName[200];
};

void keepAlive() {
    int i;
    scanf("%i", i);
}


int main() {
    struct Employee e;
    printf("Enter employee's information\n");
    printf("Full name: ");

    // scanf stops readins at space so we use fgets to capture a whole phrase
    fgets(e.fullName, sizeof(e.fullName), stdin);

    // fgets captures new line character, so we need to remove it
    e.fullName[strcspn(e.fullName, "\n")] = 0; 

    printf("Employee %s added.", e.fullName);

    keepAlive();
    return 0;
}