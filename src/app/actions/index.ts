"use server";

// info on how to change the script URL:
// https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxIfxzLHWuv4_He9WdgtslsMpo1hfuLOjEg_V0Mrsr3qW1ag7w5hTGAaTdgzZ15J6X0sA/exec";

export const sendWaitlistData = async (email: string) => {
  const response = await fetch(scriptURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      email: email,
    }).toString(),
  });

  if (response.ok) {
    return true;
  }

  console.error("Failed to send data to Google Sheets:", response.status);
  console.error("Failed to send data to Google Sheets:", response.statusText);
  return response.statusText;
};
