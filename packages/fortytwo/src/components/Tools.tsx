import config from '@plone/registry';

const HeaderTools = () => {
  const links = [
    {
      id: '1',
      label: 'edit',
      icon: '🛠️',
      url: `${config.settings.fortytwo.voltoUrl}${window.location.pathname.replace(/^\/$/, '')}/edit`,
    },
    {
      id: '2',
      label: 'contents',
      icon: '🗂️',
      url: `${config.settings.fortytwo.voltoUrl}${window.location.pathname.replace(/^\/$/, '')}/contents`,
    },
  ];
  return (
    // Inline styles since this is temporary during seven development
    <div style={{ display: 'flex', gap: '16px' }}>
      {links.map((tool) => (
        <a key={tool.id} href={tool.url}>
          <span>{tool.icon}</span>
          <span>{tool.label}</span>
        </a>
      ))}
    </div>
  );
};

export default HeaderTools;
