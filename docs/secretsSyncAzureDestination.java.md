# `secretsSyncAzureDestination` Submodule <a name="`secretsSyncAzureDestination` Submodule" id="@cdktn/provider-vault.secretsSyncAzureDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncAzureDestination <a name="SecretsSyncAzureDestination" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination vault_secrets_sync_azure_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer"></a>

```java
import io.cdktn.providers.vault.secrets_sync_azure_destination.SecretsSyncAzureDestination;

SecretsSyncAzureDestination.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowedIpv4Addresses(java.util.List<java.lang.String>)
//  .allowedIpv6Addresses(java.util.List<java.lang.String>)
//  .allowedPorts(java.util.List<java.lang.Number>)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .cloud(java.lang.String)
//  .customTags(java.util.Map<java.lang.String, java.lang.String>)
//  .disableStrictNetworking(java.lang.Boolean|IResolvable)
//  .granularity(java.lang.String)
//  .id(java.lang.String)
//  .identityTokenAudienceWo(java.lang.String)
//  .identityTokenAudienceWoVersion(java.lang.Number)
//  .identityTokenKeyWo(java.lang.String)
//  .identityTokenKeyWoVersion(java.lang.Number)
//  .identityTokenTtl(java.lang.Number)
//  .keyVaultUri(java.lang.String)
//  .namespace(java.lang.String)
//  .secretNameTemplate(java.lang.String)
//  .tenantId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name of the Azure destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.allowedIpv4Addresses">allowedIpv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Set of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed. Requires Vault 1.19+. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.allowedIpv6Addresses">allowedIpv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Set of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed. Requires Vault 1.19+. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.allowedPorts">allowedPorts</a></code> | <code>java.util.List<java.lang.Number></code> | Set of allowed ports for outbound connections from Vault to the destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Client ID of an Azure app registration. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Client Secret of an Azure app registration. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.cloud">cloud</a></code> | <code>java.lang.String</code> | Specifies a cloud for the client. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.disableStrictNetworking">disableStrictNetworking</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, disables strict networking enforcement for this destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.granularity">granularity</a></code> | <code>java.lang.String</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#id SecretsSyncAzureDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.identityTokenAudienceWo">identityTokenAudienceWo</a></code> | <code>java.lang.String</code> | The audience claim value for identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.identityTokenAudienceWoVersion">identityTokenAudienceWoVersion</a></code> | <code>java.lang.Number</code> | A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.identityTokenKeyWo">identityTokenKeyWo</a></code> | <code>java.lang.String</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.identityTokenKeyWoVersion">identityTokenKeyWoVersion</a></code> | <code>java.lang.Number</code> | A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | The TTL of generated tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.keyVaultUri">keyVaultUri</a></code> | <code>java.lang.String</code> | URI of an existing Azure Key Vault instance. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.secretNameTemplate">secretNameTemplate</a></code> | <code>java.lang.String</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | ID of the target Azure tenant. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name of the Azure destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#name SecretsSyncAzureDestination#name}

---

##### `allowedIpv4Addresses`<sup>Optional</sup> <a name="allowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.allowedIpv4Addresses"></a>

- *Type:* java.util.List<java.lang.String>

Set of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed. Requires Vault 1.19+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#allowed_ipv4_addresses SecretsSyncAzureDestination#allowed_ipv4_addresses}

---

##### `allowedIpv6Addresses`<sup>Optional</sup> <a name="allowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.allowedIpv6Addresses"></a>

- *Type:* java.util.List<java.lang.String>

Set of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed. Requires Vault 1.19+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#allowed_ipv6_addresses SecretsSyncAzureDestination#allowed_ipv6_addresses}

---

##### `allowedPorts`<sup>Optional</sup> <a name="allowedPorts" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.allowedPorts"></a>

- *Type:* java.util.List<java.lang.Number>

Set of allowed ports for outbound connections from Vault to the destination.

If not set, all ports are allowed. Requires Vault 1.19+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#allowed_ports SecretsSyncAzureDestination#allowed_ports}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Client ID of an Azure app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#client_id SecretsSyncAzureDestination#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

Client Secret of an Azure app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#client_secret SecretsSyncAzureDestination#client_secret}

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.cloud"></a>

- *Type:* java.lang.String

Specifies a cloud for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#cloud SecretsSyncAzureDestination#cloud}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.customTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#custom_tags SecretsSyncAzureDestination#custom_tags}

---

##### `disableStrictNetworking`<sup>Optional</sup> <a name="disableStrictNetworking" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.disableStrictNetworking"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, disables strict networking enforcement for this destination.

When disabled, Vault will not enforce allowed IP addresses and ports. Requires Vault 1.19+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#disable_strict_networking SecretsSyncAzureDestination#disable_strict_networking}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.granularity"></a>

- *Type:* java.lang.String

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#granularity SecretsSyncAzureDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#id SecretsSyncAzureDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenAudienceWo`<sup>Optional</sup> <a name="identityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.identityTokenAudienceWo"></a>

- *Type:* java.lang.String

The audience claim value for identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#identity_token_audience_wo SecretsSyncAzureDestination#identity_token_audience_wo}

---

##### `identityTokenAudienceWoVersion`<sup>Optional</sup> <a name="identityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.identityTokenAudienceWoVersion"></a>

- *Type:* java.lang.Number

A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#identity_token_audience_wo_version SecretsSyncAzureDestination#identity_token_audience_wo_version}

---

##### `identityTokenKeyWo`<sup>Optional</sup> <a name="identityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.identityTokenKeyWo"></a>

- *Type:* java.lang.String

The key to use for signing identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#identity_token_key_wo SecretsSyncAzureDestination#identity_token_key_wo}

---

##### `identityTokenKeyWoVersion`<sup>Optional</sup> <a name="identityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.identityTokenKeyWoVersion"></a>

- *Type:* java.lang.Number

A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#identity_token_key_wo_version SecretsSyncAzureDestination#identity_token_key_wo_version}

---

##### `identityTokenTtl`<sup>Optional</sup> <a name="identityTokenTtl" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.identityTokenTtl"></a>

- *Type:* java.lang.Number

The TTL of generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#identity_token_ttl SecretsSyncAzureDestination#identity_token_ttl}

---

##### `keyVaultUri`<sup>Optional</sup> <a name="keyVaultUri" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.keyVaultUri"></a>

- *Type:* java.lang.String

URI of an existing Azure Key Vault instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#key_vault_uri SecretsSyncAzureDestination#key_vault_uri}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#namespace SecretsSyncAzureDestination#namespace}

---

##### `secretNameTemplate`<sup>Optional</sup> <a name="secretNameTemplate" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.secretNameTemplate"></a>

- *Type:* java.lang.String

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#secret_name_template SecretsSyncAzureDestination#secret_name_template}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

ID of the target Azure tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#tenant_id SecretsSyncAzureDestination#tenant_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetAllowedIpv4Addresses">resetAllowedIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetAllowedIpv6Addresses">resetAllowedIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetAllowedPorts">resetAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCloud">resetCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetDisableStrictNetworking">resetDisableStrictNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetGranularity">resetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenAudienceWo">resetIdentityTokenAudienceWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenAudienceWoVersion">resetIdentityTokenAudienceWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenKeyWo">resetIdentityTokenKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenKeyWoVersion">resetIdentityTokenKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenTtl">resetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetKeyVaultUri">resetKeyVaultUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetSecretNameTemplate">resetSecretNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedIpv4Addresses` <a name="resetAllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetAllowedIpv4Addresses"></a>

```java
public void resetAllowedIpv4Addresses()
```

##### `resetAllowedIpv6Addresses` <a name="resetAllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetAllowedIpv6Addresses"></a>

```java
public void resetAllowedIpv6Addresses()
```

##### `resetAllowedPorts` <a name="resetAllowedPorts" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetAllowedPorts"></a>

```java
public void resetAllowedPorts()
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetCloud` <a name="resetCloud" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCloud"></a>

```java
public void resetCloud()
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCustomTags"></a>

```java
public void resetCustomTags()
```

##### `resetDisableStrictNetworking` <a name="resetDisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetDisableStrictNetworking"></a>

```java
public void resetDisableStrictNetworking()
```

##### `resetGranularity` <a name="resetGranularity" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetGranularity"></a>

```java
public void resetGranularity()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityTokenAudienceWo` <a name="resetIdentityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenAudienceWo"></a>

```java
public void resetIdentityTokenAudienceWo()
```

##### `resetIdentityTokenAudienceWoVersion` <a name="resetIdentityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenAudienceWoVersion"></a>

```java
public void resetIdentityTokenAudienceWoVersion()
```

##### `resetIdentityTokenKeyWo` <a name="resetIdentityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenKeyWo"></a>

```java
public void resetIdentityTokenKeyWo()
```

##### `resetIdentityTokenKeyWoVersion` <a name="resetIdentityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenKeyWoVersion"></a>

```java
public void resetIdentityTokenKeyWoVersion()
```

##### `resetIdentityTokenTtl` <a name="resetIdentityTokenTtl" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenTtl"></a>

```java
public void resetIdentityTokenTtl()
```

##### `resetKeyVaultUri` <a name="resetKeyVaultUri" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetKeyVaultUri"></a>

```java
public void resetKeyVaultUri()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetSecretNameTemplate` <a name="resetSecretNameTemplate" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetSecretNameTemplate"></a>

```java
public void resetSecretNameTemplate()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetTenantId"></a>

```java
public void resetTenantId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsSyncAzureDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct"></a>

```java
import io.cdktn.providers.vault.secrets_sync_azure_destination.SecretsSyncAzureDestination;

SecretsSyncAzureDestination.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.secrets_sync_azure_destination.SecretsSyncAzureDestination;

SecretsSyncAzureDestination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.secrets_sync_azure_destination.SecretsSyncAzureDestination;

SecretsSyncAzureDestination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.secrets_sync_azure_destination.SecretsSyncAzureDestination;

SecretsSyncAzureDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecretsSyncAzureDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecretsSyncAzureDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecretsSyncAzureDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecretsSyncAzureDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecretsSyncAzureDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv4AddressesInput">allowedIpv4AddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv6AddressesInput">allowedIpv6AddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedPortsInput">allowedPortsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloudInput">cloudInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTagsInput">customTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.disableStrictNetworkingInput">disableStrictNetworkingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularityInput">granularityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWoInput">identityTokenAudienceWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWoVersionInput">identityTokenAudienceWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWoInput">identityTokenKeyWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWoVersionInput">identityTokenKeyWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenTtlInput">identityTokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUriInput">keyVaultUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplateInput">secretNameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv4Addresses">allowedIpv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv6Addresses">allowedIpv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedPorts">allowedPorts</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloud">cloud</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.disableStrictNetworking">disableStrictNetworking</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularity">granularity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWo">identityTokenAudienceWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWoVersion">identityTokenAudienceWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWo">identityTokenKeyWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWoVersion">identityTokenKeyWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUri">keyVaultUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplate">secretNameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `allowedIpv4AddressesInput`<sup>Optional</sup> <a name="allowedIpv4AddressesInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv4AddressesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv4AddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIpv6AddressesInput`<sup>Optional</sup> <a name="allowedIpv6AddressesInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv6AddressesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv6AddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedPortsInput`<sup>Optional</sup> <a name="allowedPortsInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedPortsInput"></a>

```java
public java.util.List<java.lang.Number> getAllowedPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `cloudInput`<sup>Optional</sup> <a name="cloudInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloudInput"></a>

```java
public java.lang.String getCloudInput();
```

- *Type:* java.lang.String

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disableStrictNetworkingInput`<sup>Optional</sup> <a name="disableStrictNetworkingInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.disableStrictNetworkingInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableStrictNetworkingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularityInput"></a>

```java
public java.lang.String getGranularityInput();
```

- *Type:* java.lang.String

---

##### `identityTokenAudienceWoInput`<sup>Optional</sup> <a name="identityTokenAudienceWoInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWoInput"></a>

```java
public java.lang.String getIdentityTokenAudienceWoInput();
```

- *Type:* java.lang.String

---

##### `identityTokenAudienceWoVersionInput`<sup>Optional</sup> <a name="identityTokenAudienceWoVersionInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWoVersionInput"></a>

```java
public java.lang.Number getIdentityTokenAudienceWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `identityTokenKeyWoInput`<sup>Optional</sup> <a name="identityTokenKeyWoInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWoInput"></a>

```java
public java.lang.String getIdentityTokenKeyWoInput();
```

- *Type:* java.lang.String

---

##### `identityTokenKeyWoVersionInput`<sup>Optional</sup> <a name="identityTokenKeyWoVersionInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWoVersionInput"></a>

```java
public java.lang.Number getIdentityTokenKeyWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `identityTokenTtlInput`<sup>Optional</sup> <a name="identityTokenTtlInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenTtlInput"></a>

```java
public java.lang.Number getIdentityTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultUriInput`<sup>Optional</sup> <a name="keyVaultUriInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUriInput"></a>

```java
public java.lang.String getKeyVaultUriInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `secretNameTemplateInput`<sup>Optional</sup> <a name="secretNameTemplateInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplateInput"></a>

```java
public java.lang.String getSecretNameTemplateInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `allowedIpv4Addresses`<sup>Required</sup> <a name="allowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv4Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIpv6Addresses`<sup>Required</sup> <a name="allowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv6Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedPorts`<sup>Required</sup> <a name="allowedPorts" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedPorts"></a>

```java
public java.util.List<java.lang.Number> getAllowedPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloud"></a>

```java
public java.lang.String getCloud();
```

- *Type:* java.lang.String

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disableStrictNetworking`<sup>Required</sup> <a name="disableStrictNetworking" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.disableStrictNetworking"></a>

```java
public java.lang.Boolean|IResolvable getDisableStrictNetworking();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityTokenAudienceWo`<sup>Required</sup> <a name="identityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWo"></a>

```java
public java.lang.String getIdentityTokenAudienceWo();
```

- *Type:* java.lang.String

---

##### `identityTokenAudienceWoVersion`<sup>Required</sup> <a name="identityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWoVersion"></a>

```java
public java.lang.Number getIdentityTokenAudienceWoVersion();
```

- *Type:* java.lang.Number

---

##### `identityTokenKeyWo`<sup>Required</sup> <a name="identityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWo"></a>

```java
public java.lang.String getIdentityTokenKeyWo();
```

- *Type:* java.lang.String

---

##### `identityTokenKeyWoVersion`<sup>Required</sup> <a name="identityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWoVersion"></a>

```java
public java.lang.Number getIdentityTokenKeyWoVersion();
```

- *Type:* java.lang.Number

---

##### `identityTokenTtl`<sup>Required</sup> <a name="identityTokenTtl" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenTtl"></a>

```java
public java.lang.Number getIdentityTokenTtl();
```

- *Type:* java.lang.Number

---

##### `keyVaultUri`<sup>Required</sup> <a name="keyVaultUri" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUri"></a>

```java
public java.lang.String getKeyVaultUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `secretNameTemplate`<sup>Required</sup> <a name="secretNameTemplate" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplate"></a>

```java
public java.lang.String getSecretNameTemplate();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncAzureDestinationConfig <a name="SecretsSyncAzureDestinationConfig" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.secrets_sync_azure_destination.SecretsSyncAzureDestinationConfig;

SecretsSyncAzureDestinationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowedIpv4Addresses(java.util.List<java.lang.String>)
//  .allowedIpv6Addresses(java.util.List<java.lang.String>)
//  .allowedPorts(java.util.List<java.lang.Number>)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .cloud(java.lang.String)
//  .customTags(java.util.Map<java.lang.String, java.lang.String>)
//  .disableStrictNetworking(java.lang.Boolean|IResolvable)
//  .granularity(java.lang.String)
//  .id(java.lang.String)
//  .identityTokenAudienceWo(java.lang.String)
//  .identityTokenAudienceWoVersion(java.lang.Number)
//  .identityTokenKeyWo(java.lang.String)
//  .identityTokenKeyWoVersion(java.lang.Number)
//  .identityTokenTtl(java.lang.Number)
//  .keyVaultUri(java.lang.String)
//  .namespace(java.lang.String)
//  .secretNameTemplate(java.lang.String)
//  .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name of the Azure destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.allowedIpv4Addresses">allowedIpv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Set of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed. Requires Vault 1.19+. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.allowedIpv6Addresses">allowedIpv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Set of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed. Requires Vault 1.19+. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.allowedPorts">allowedPorts</a></code> | <code>java.util.List<java.lang.Number></code> | Set of allowed ports for outbound connections from Vault to the destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Client ID of an Azure app registration. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Client Secret of an Azure app registration. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.cloud">cloud</a></code> | <code>java.lang.String</code> | Specifies a cloud for the client. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.disableStrictNetworking">disableStrictNetworking</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, disables strict networking enforcement for this destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.granularity">granularity</a></code> | <code>java.lang.String</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#id SecretsSyncAzureDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenAudienceWo">identityTokenAudienceWo</a></code> | <code>java.lang.String</code> | The audience claim value for identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenAudienceWoVersion">identityTokenAudienceWoVersion</a></code> | <code>java.lang.Number</code> | A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenKeyWo">identityTokenKeyWo</a></code> | <code>java.lang.String</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenKeyWoVersion">identityTokenKeyWoVersion</a></code> | <code>java.lang.Number</code> | A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | The TTL of generated tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.keyVaultUri">keyVaultUri</a></code> | <code>java.lang.String</code> | URI of an existing Azure Key Vault instance. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.secretNameTemplate">secretNameTemplate</a></code> | <code>java.lang.String</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | ID of the target Azure tenant. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name of the Azure destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#name SecretsSyncAzureDestination#name}

---

##### `allowedIpv4Addresses`<sup>Optional</sup> <a name="allowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.allowedIpv4Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

Set of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed. Requires Vault 1.19+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#allowed_ipv4_addresses SecretsSyncAzureDestination#allowed_ipv4_addresses}

---

##### `allowedIpv6Addresses`<sup>Optional</sup> <a name="allowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.allowedIpv6Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

Set of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed. Requires Vault 1.19+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#allowed_ipv6_addresses SecretsSyncAzureDestination#allowed_ipv6_addresses}

---

##### `allowedPorts`<sup>Optional</sup> <a name="allowedPorts" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.allowedPorts"></a>

```java
public java.util.List<java.lang.Number> getAllowedPorts();
```

- *Type:* java.util.List<java.lang.Number>

Set of allowed ports for outbound connections from Vault to the destination.

If not set, all ports are allowed. Requires Vault 1.19+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#allowed_ports SecretsSyncAzureDestination#allowed_ports}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Client ID of an Azure app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#client_id SecretsSyncAzureDestination#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Client Secret of an Azure app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#client_secret SecretsSyncAzureDestination#client_secret}

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.cloud"></a>

```java
public java.lang.String getCloud();
```

- *Type:* java.lang.String

Specifies a cloud for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#cloud SecretsSyncAzureDestination#cloud}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.customTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#custom_tags SecretsSyncAzureDestination#custom_tags}

---

##### `disableStrictNetworking`<sup>Optional</sup> <a name="disableStrictNetworking" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.disableStrictNetworking"></a>

```java
public java.lang.Boolean|IResolvable getDisableStrictNetworking();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, disables strict networking enforcement for this destination.

When disabled, Vault will not enforce allowed IP addresses and ports. Requires Vault 1.19+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#disable_strict_networking SecretsSyncAzureDestination#disable_strict_networking}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#granularity SecretsSyncAzureDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#id SecretsSyncAzureDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenAudienceWo`<sup>Optional</sup> <a name="identityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenAudienceWo"></a>

```java
public java.lang.String getIdentityTokenAudienceWo();
```

- *Type:* java.lang.String

The audience claim value for identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#identity_token_audience_wo SecretsSyncAzureDestination#identity_token_audience_wo}

---

##### `identityTokenAudienceWoVersion`<sup>Optional</sup> <a name="identityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenAudienceWoVersion"></a>

```java
public java.lang.Number getIdentityTokenAudienceWoVersion();
```

- *Type:* java.lang.Number

A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#identity_token_audience_wo_version SecretsSyncAzureDestination#identity_token_audience_wo_version}

---

##### `identityTokenKeyWo`<sup>Optional</sup> <a name="identityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenKeyWo"></a>

```java
public java.lang.String getIdentityTokenKeyWo();
```

- *Type:* java.lang.String

The key to use for signing identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#identity_token_key_wo SecretsSyncAzureDestination#identity_token_key_wo}

---

##### `identityTokenKeyWoVersion`<sup>Optional</sup> <a name="identityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenKeyWoVersion"></a>

```java
public java.lang.Number getIdentityTokenKeyWoVersion();
```

- *Type:* java.lang.Number

A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#identity_token_key_wo_version SecretsSyncAzureDestination#identity_token_key_wo_version}

---

##### `identityTokenTtl`<sup>Optional</sup> <a name="identityTokenTtl" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenTtl"></a>

```java
public java.lang.Number getIdentityTokenTtl();
```

- *Type:* java.lang.Number

The TTL of generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#identity_token_ttl SecretsSyncAzureDestination#identity_token_ttl}

---

##### `keyVaultUri`<sup>Optional</sup> <a name="keyVaultUri" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.keyVaultUri"></a>

```java
public java.lang.String getKeyVaultUri();
```

- *Type:* java.lang.String

URI of an existing Azure Key Vault instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#key_vault_uri SecretsSyncAzureDestination#key_vault_uri}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#namespace SecretsSyncAzureDestination#namespace}

---

##### `secretNameTemplate`<sup>Optional</sup> <a name="secretNameTemplate" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.secretNameTemplate"></a>

```java
public java.lang.String getSecretNameTemplate();
```

- *Type:* java.lang.String

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#secret_name_template SecretsSyncAzureDestination#secret_name_template}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

ID of the target Azure tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#tenant_id SecretsSyncAzureDestination#tenant_id}

---



