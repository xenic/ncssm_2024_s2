import subprocess

HOME_DIR = "/Users/sam.boyarsky"
SCHOOL_DIR = f"{HOME_DIR}/personal/ncssm"
STUDENT_LIST = f"{SCHOOL_DIR}/grading/student_list.txt"

REF_DIR = f"{SCHOOL_DIR}/css_lp_key/"
STUDENT_DIR = f"{SCHOOL_DIR}/grading/lp_css/"
DIR_SUFFIX = "css_lp"

keys = [
        "",
        f"{REF_DIR}1.html",
        f"{REF_DIR}2.html",
        f"{REF_DIR}3.html",
        f"{REF_DIR}4.html",
        ]

def main():
    with open(STUDENT_LIST) as sl:
        students = sl.readlines()
    for student in students:
        student = student.strip()
        print(student)
        for i in range(1,5):
            subprocess.run(["diff", keys[i],f"{STUDENT_DIR}{student}_css_lp/{i}.html"])


if __name__ == "__main__":
    main()
