def Palindrome(text):

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
          return s[0]==s[-1] and Paildrome(s[1:-1])