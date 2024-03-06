'use client'

import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMain,
  SidebarNav,
  SidebarNavHeader,
  SidebarNavHeaderTitle,
  SidebarNavLink,
  SidebarNavMain,
} from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'
import { ClipboardList, Settings } from 'lucide-react'

export function MainSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <h1>Test</h1>
      </SidebarHeader>
      <SidebarMain className="flex flex-col flex-1">
        <SidebarNav>
          <SidebarNavMain>
            <SidebarNavLink href="/app" active={isActive('/app')}>
              <ClipboardList size={16} />
              Tarefas
            </SidebarNavLink>
            <SidebarNavLink
              href="/app/settings"
              active={isActive('/app/settings')}
            >
              <Settings size={16} />
              Configurações
            </SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>
        <SidebarNav className="mt-auto">
          <SidebarNavHeader>
            <SidebarNavHeaderTitle>Links extras</SidebarNavHeaderTitle>
          </SidebarNavHeader>
          <SidebarNavMain>
            <SidebarNavLink href="/">Precisa de ajuda?</SidebarNavLink>
            <SidebarNavLink href="/">Site</SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>
      </SidebarMain>
      <SidebarFooter>
        <h3>User</h3>
      </SidebarFooter>
    </Sidebar>
  )
}
