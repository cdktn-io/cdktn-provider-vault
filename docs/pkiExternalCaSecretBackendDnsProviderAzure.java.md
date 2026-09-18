# `pkiExternalCaSecretBackendDnsProviderAzure` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderAzure` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderAzure <a name="PkiExternalCaSecretBackendDnsProviderAzure" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure vault_pki_external_ca_secret_backend_dns_provider_azure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_azure.PkiExternalCaSecretBackendDnsProviderAzure;

PkiExternalCaSecretBackendDnsProviderAzure.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identifiers(java.util.List<java.lang.String>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecretWo(java.lang.String)
//  .clientSecretWoVersion(java.lang.Number)
//  .environment(java.lang.String)
//  .nameserver(java.lang.String)
//  .namespace(java.lang.String)
//  .resourceGroupName(java.lang.String)
//  .subscriptionId(java.lang.String)
//  .tenantId(java.lang.String)
//  .ttl(java.lang.Number)
//  .zoneName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Azure service principal client ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.clientSecretWo">clientSecretWo</a></code> | <code>java.lang.String</code> | Azure service principal client secret. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.clientSecretWoVersion">clientSecretWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only `client_secret` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | Azure cloud environment. Valid values: `AzurePublic`, `AzureChina`, `AzureGovernment`. Defaults to `AzurePublic`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.nameserver">nameserver</a></code> | <code>java.lang.String</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Resource group containing the DNS zone. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Azure subscription ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Azure tenant ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.zoneName">zoneName</a></code> | <code>java.lang.String</code> | Azure DNS zone name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.identifiers"></a>

- *Type:* java.util.List<java.lang.String>

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#identifiers PkiExternalCaSecretBackendDnsProviderAzure#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#mount PkiExternalCaSecretBackendDnsProviderAzure#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#name PkiExternalCaSecretBackendDnsProviderAzure#name}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Azure service principal client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_id PkiExternalCaSecretBackendDnsProviderAzure#client_id}

---

##### `clientSecretWo`<sup>Optional</sup> <a name="clientSecretWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.clientSecretWo"></a>

- *Type:* java.lang.String

Azure service principal client secret. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_secret_wo PkiExternalCaSecretBackendDnsProviderAzure#client_secret_wo}

---

##### `clientSecretWoVersion`<sup>Optional</sup> <a name="clientSecretWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.clientSecretWoVersion"></a>

- *Type:* java.lang.Number

Version counter for the write-only `client_secret` field.

Increment this value to trigger an update to the client secret in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_secret_wo_version PkiExternalCaSecretBackendDnsProviderAzure#client_secret_wo_version}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

Azure cloud environment. Valid values: `AzurePublic`, `AzureChina`, `AzureGovernment`. Defaults to `AzurePublic`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#environment PkiExternalCaSecretBackendDnsProviderAzure#environment}

---

##### `nameserver`<sup>Optional</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.nameserver"></a>

- *Type:* java.lang.String

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#nameserver PkiExternalCaSecretBackendDnsProviderAzure#nameserver}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#namespace PkiExternalCaSecretBackendDnsProviderAzure#namespace}

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Resource group containing the DNS zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#resource_group_name PkiExternalCaSecretBackendDnsProviderAzure#resource_group_name}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Azure subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#subscription_id PkiExternalCaSecretBackendDnsProviderAzure#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Azure tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#tenant_id PkiExternalCaSecretBackendDnsProviderAzure#tenant_id}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#ttl PkiExternalCaSecretBackendDnsProviderAzure#ttl}

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.zoneName"></a>

- *Type:* java.lang.String

Azure DNS zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#zone_name PkiExternalCaSecretBackendDnsProviderAzure#zone_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWo">resetClientSecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWoVersion">resetClientSecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNameserver">resetNameserver</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetZoneName">resetZoneName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecretWo` <a name="resetClientSecretWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWo"></a>

```java
public void resetClientSecretWo()
```

##### `resetClientSecretWoVersion` <a name="resetClientSecretWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWoVersion"></a>

```java
public void resetClientSecretWoVersion()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetNameserver` <a name="resetNameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNameserver"></a>

```java
public void resetNameserver()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetResourceGroupName"></a>

```java
public void resetResourceGroupName()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetZoneName` <a name="resetZoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetZoneName"></a>

```java
public void resetZoneName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAzure resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isConstruct"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_azure.PkiExternalCaSecretBackendDnsProviderAzure;

PkiExternalCaSecretBackendDnsProviderAzure.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_azure.PkiExternalCaSecretBackendDnsProviderAzure;

PkiExternalCaSecretBackendDnsProviderAzure.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_azure.PkiExternalCaSecretBackendDnsProviderAzure;

PkiExternalCaSecretBackendDnsProviderAzure.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_azure.PkiExternalCaSecretBackendDnsProviderAzure;

PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAzure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderAzure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiExternalCaSecretBackendDnsProviderAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoInput">clientSecretWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersionInput">clientSecretWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiersInput">identifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserverInput">nameserverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneNameInput">zoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWo">clientSecretWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersion">clientSecretWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserver">nameserver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lastUpdatedDate"></a>

```java
public java.lang.String getLastUpdatedDate();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretWoInput`<sup>Optional</sup> <a name="clientSecretWoInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoInput"></a>

```java
public java.lang.String getClientSecretWoInput();
```

- *Type:* java.lang.String

---

##### `clientSecretWoVersionInput`<sup>Optional</sup> <a name="clientSecretWoVersionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersionInput"></a>

```java
public java.lang.Number getClientSecretWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `identifiersInput`<sup>Optional</sup> <a name="identifiersInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiersInput"></a>

```java
public java.util.List<java.lang.String> getIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nameserverInput`<sup>Optional</sup> <a name="nameserverInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserverInput"></a>

```java
public java.lang.String getNameserverInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneNameInput"></a>

```java
public java.lang.String getZoneNameInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### ~~`clientSecretWo`~~<sup>Required</sup> <a name="clientSecretWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getClientSecretWo();
```

- *Type:* java.lang.String

---

##### `clientSecretWoVersion`<sup>Required</sup> <a name="clientSecretWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersion"></a>

```java
public java.lang.Number getClientSecretWoVersion();
```

- *Type:* java.lang.Number

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nameserver`<sup>Required</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserver"></a>

```java
public java.lang.String getNameserver();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderAzureConfig <a name="PkiExternalCaSecretBackendDnsProviderAzureConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_dns_provider_azure.PkiExternalCaSecretBackendDnsProviderAzureConfig;

PkiExternalCaSecretBackendDnsProviderAzureConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identifiers(java.util.List<java.lang.String>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecretWo(java.lang.String)
//  .clientSecretWoVersion(java.lang.Number)
//  .environment(java.lang.String)
//  .nameserver(java.lang.String)
//  .namespace(java.lang.String)
//  .resourceGroupName(java.lang.String)
//  .subscriptionId(java.lang.String)
//  .tenantId(java.lang.String)
//  .ttl(java.lang.Number)
//  .zoneName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Azure service principal client ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWo">clientSecretWo</a></code> | <code>java.lang.String</code> | Azure service principal client secret. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWoVersion">clientSecretWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only `client_secret` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | Azure cloud environment. Valid values: `AzurePublic`, `AzureChina`, `AzureGovernment`. Defaults to `AzurePublic`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.nameserver">nameserver</a></code> | <code>java.lang.String</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Resource group containing the DNS zone. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Azure subscription ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Azure tenant ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.zoneName">zoneName</a></code> | <code>java.lang.String</code> | Azure DNS zone name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#identifiers PkiExternalCaSecretBackendDnsProviderAzure#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#mount PkiExternalCaSecretBackendDnsProviderAzure#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#name PkiExternalCaSecretBackendDnsProviderAzure#name}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Azure service principal client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_id PkiExternalCaSecretBackendDnsProviderAzure#client_id}

---

##### `clientSecretWo`<sup>Optional</sup> <a name="clientSecretWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWo"></a>

```java
public java.lang.String getClientSecretWo();
```

- *Type:* java.lang.String

Azure service principal client secret. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_secret_wo PkiExternalCaSecretBackendDnsProviderAzure#client_secret_wo}

---

##### `clientSecretWoVersion`<sup>Optional</sup> <a name="clientSecretWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWoVersion"></a>

```java
public java.lang.Number getClientSecretWoVersion();
```

- *Type:* java.lang.Number

Version counter for the write-only `client_secret` field.

Increment this value to trigger an update to the client secret in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_secret_wo_version PkiExternalCaSecretBackendDnsProviderAzure#client_secret_wo_version}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

Azure cloud environment. Valid values: `AzurePublic`, `AzureChina`, `AzureGovernment`. Defaults to `AzurePublic`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#environment PkiExternalCaSecretBackendDnsProviderAzure#environment}

---

##### `nameserver`<sup>Optional</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.nameserver"></a>

```java
public java.lang.String getNameserver();
```

- *Type:* java.lang.String

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#nameserver PkiExternalCaSecretBackendDnsProviderAzure#nameserver}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#namespace PkiExternalCaSecretBackendDnsProviderAzure#namespace}

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Resource group containing the DNS zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#resource_group_name PkiExternalCaSecretBackendDnsProviderAzure#resource_group_name}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Azure subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#subscription_id PkiExternalCaSecretBackendDnsProviderAzure#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Azure tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#tenant_id PkiExternalCaSecretBackendDnsProviderAzure#tenant_id}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#ttl PkiExternalCaSecretBackendDnsProviderAzure#ttl}

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.zoneName"></a>

```java
public java.lang.String getZoneName();
```

- *Type:* java.lang.String

Azure DNS zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#zone_name PkiExternalCaSecretBackendDnsProviderAzure#zone_name}

---



