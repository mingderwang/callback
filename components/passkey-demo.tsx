"'use client'"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PasskeyDemo() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">ZeroDev Passkeys + Session Keys Demo</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <CardDescription className="text-base">
          This demo showcases the ZeroDev <a href="#" className="text-blue-500 hover:underline">progressive passkey validator</a> (which uses <a href="#" className="text-blue-500 hover:underline">ERC-7212</a> when available) combined with <a href="#" className="text-blue-500 hover:underline">session keys</a>.
        </CardDescription>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Steps:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Register (create a new passkey) or login (use an existing passkey).</li>
              <li>Send a UserOp, and observe that the first UserOp takes a lot of gas.
                <ul className="list-disc pl-5 mt-2">
                  <li>This is because we need to verify the passkey.</li>
                </ul>
              </li>
              <li>Send more UserOps, and observe that they all cost a lot less gas than the first one.
                <ul className="list-disc pl-5 mt-2">
                  <li>This is because the UserOps are sent through cheap ECDSA session keys.</li>
                </ul>
              </li>
            </ul>
            <p className="mt-4">
              To sum up, by combining passkeys with session keys, we get the best of both worlds where the user account is secured by their own passkey, but UserOps are still cheap due to using ECDSA session keys.
            </p>
          </div>
          <div className="space-y-4">
            <Input placeholder="Your username" />
            <div className="grid grid-cols-2 gap-4">
              <Button className="w-full">Register</Button>
              <Button className="w-full" variant="secondary">Login</Button>
            </div>
            <Button className="w-full" variant="outline">Send UserOp</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}