export default function FarmAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#F2EFE8] overflow-hidden">
      {children}
    </div>
  )
}
