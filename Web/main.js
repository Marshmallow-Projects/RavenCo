document.getElementById('generateLink').onclick = () => {
  const code = btoa(Date.now().toString()).slice(0, 8);
  const link = `${window.location.origin}/#${code}`;
  navigator.clipboard.writeText(link);
  alert(`🔗 Invite Link Copied: ${link}`);
};

document.getElementById('connect').onclick = () => {
  const code = document.getElementById('inviteCode').value.trim();
  if (!code) return alert("Paste a valid invite code.");
  alert(`🔌 Connecting to: ${code}`);
  // TODO: Setup WebRTC connection here
};
