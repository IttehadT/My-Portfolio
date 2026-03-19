/* ============================================================================
   MASTER SVG ICON TEMPLATE & GUIDE
   ============================================================================

   PHASE 1: GET THE SVG DATA
   1. Go to https://simpleicons.org/
   2. Search for the technology (e.g., "C++" or "MongoDB").
   3. Copy the Hex Color: Click the color hex code (e.g., #00599C) to copy it.
   4. Download the SVG: Click "Download SVG" and open it in VS Code or Notepad.
      You will need two things from this downloaded file:
      - The `viewBox` numbers (usually "0 0 24 24").
      - The huge string of letters/numbers inside the <path d="..." />.

   PHASE 2: CREATE THE COMPONENT
   1. In VS Code, go to `src/components/ui/svgs/`.
   2. Create a New File (e.g., `cpp.tsx` or `mongodb.tsx`).
   3. Copy the code below this comment block and paste it into your new file.
   4. Follow the numbered steps (1-5) in the code below to fill in the blanks.

   PHASE 3: ADD IT TO THE RESUME DATA
   1. Open `src/data/resume.tsx`.
   2. Import it at the top (under ACTIVE ICONS):
      import { Cpp } from "@/components/ui/svgs/cpp";
   3. Add it to the skills array:
      { name: "C++", icon: Cpp },
   ============================================================================ */

import { SVGProps } from "react";

// 1. Rename "IconName" to match your tech (Must start with a Capital letter, e.g., Cpp, Mongodb)
export function IconName(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      
      // 2. Paste the viewBox from the downloaded SVG
      viewBox="0 0 24 24" 
      
      xmlns="http://www.w3.org/2000/svg"
      
      // 3. Paste the Hex Color here (or use "currentColor" for dark/light mode shapes)
      fill="#XXXXXX"      
      
      // Keeps the template's auto-sizing and tailwind classes
      {...props}          
    >
      {/* 4. Type the name (e.g., "C++") */}
      <title>Title</title> 
      
      {/* 5. Paste the long path d="..." string */}
      <path d="PASTE_YOUR_LONG_PATH_STRING_HERE" /> 
    </svg>
  );
}