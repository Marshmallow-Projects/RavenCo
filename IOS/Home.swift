import SwiftUI

struct HomeView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 20) {
                Text("💬 RavenCo")
                    .font(.largeTitle)
                    .bold()

                NavigationLink("Generate Invite", destination: ConnectView())

                NavigationLink("Join Chat", destination: ChatView())
            }
            .padding()
        }
    }
}
