s = input("문자를 입력하세요: ")
    
def  Palindrome(text):


    def toChars(s):
       s=s.lower()
       ans=''
       for c in s:
         if c in 'abcdefghijklmnopqrstuvwxyz':
            ans = ans+c
       return ans


    def isPalid(s):
       if len(s)<=1:
          return True
                    
       else:
          return False

if Palindrome(s):
    
    print(1)
else:
    print(0)

          
