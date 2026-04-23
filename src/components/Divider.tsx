export default function Divider() {
  return (
    <div aria-hidden="true" className="flex items-center">
      <div
        className="flex-1 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #e2e8f0)' }}
      />
      <div className="flex items-center gap-1.5 px-5">
        <div className="w-1 h-1 rounded-full" style={{ background: '#e2e8f0' }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#3b6ee8', opacity: 0.4 }} />
        <div className="w-1 h-1 rounded-full" style={{ background: '#e2e8f0' }} />
      </div>
      <div
        className="flex-1 h-px"
        style={{ background: 'linear-gradient(270deg, transparent, #e2e8f0)' }}
      />
    </div>
  )
}
