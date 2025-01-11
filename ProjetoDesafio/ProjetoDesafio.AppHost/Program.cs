var builder = DistributedApplication.CreateBuilder(args);

var apiService = builder.AddProject<Projects.ProjetoDesafio_ApiService>("apiservice");

builder.AddProject<Projects.ProjetoDesafio_Web>("webfrontend")
    .WithExternalHttpEndpoints()
    .WithReference(apiService)
    .WaitFor(apiService);

builder.Build().Run();
