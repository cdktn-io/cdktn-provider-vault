# `secretsSyncGcpDestination` Submodule <a name="`secretsSyncGcpDestination` Submodule" id="@cdktn/provider-vault.secretsSyncGcpDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncGcpDestination <a name="SecretsSyncGcpDestination" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination vault_secrets_sync_gcp_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer"></a>

```java
import io.cdktn.providers.vault.secrets_sync_gcp_destination.SecretsSyncGcpDestination;

SecretsSyncGcpDestination.Builder.create(Construct scope, java.lang.String id)
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
//  .credentials(java.lang.String)
//  .customTags(java.util.Map<java.lang.String, java.lang.String>)
//  .disableStrictNetworking(java.lang.Boolean|IResolvable)
//  .globalKmsKey(java.lang.String)
//  .granularity(java.lang.String)
//  .id(java.lang.String)
//  .identityTokenAudienceWo(java.lang.String)
//  .identityTokenAudienceWoVersion(java.lang.Number)
//  .identityTokenKeyWo(java.lang.String)
//  .identityTokenKeyWoVersion(java.lang.Number)
//  .identityTokenTtl(java.lang.Number)
//  .locationalKmsKeys(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .projectId(java.lang.String)
//  .replicationLocations(java.util.List<java.lang.String>)
//  .secretNameTemplate(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name of the GCP destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.allowedIpv4Addresses">allowedIpv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Allowed IPv4 addresses for outbound network connectivity in CIDR notation. If not set, all IPv4 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.allowedIpv6Addresses">allowedIpv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Allowed IPv6 addresses for outbound network connectivity in CIDR notation. If not set, all IPv6 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.allowedPorts">allowedPorts</a></code> | <code>java.util.List<java.lang.Number></code> | Allowed ports for outbound network connectivity. If not set, all ports are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.credentials">credentials</a></code> | <code>java.lang.String</code> | JSON-encoded credentials to use to connect to GCP. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.disableStrictNetworking">disableStrictNetworking</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable strict networking requirements. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.globalKmsKey">globalKmsKey</a></code> | <code>java.lang.String</code> | Global KMS key for encryption. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.granularity">granularity</a></code> | <code>java.lang.String</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#id SecretsSyncGcpDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.identityTokenAudienceWo">identityTokenAudienceWo</a></code> | <code>java.lang.String</code> | The audience claim value for identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.identityTokenAudienceWoVersion">identityTokenAudienceWoVersion</a></code> | <code>java.lang.Number</code> | A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.identityTokenKeyWo">identityTokenKeyWo</a></code> | <code>java.lang.String</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.identityTokenKeyWoVersion">identityTokenKeyWoVersion</a></code> | <code>java.lang.Number</code> | A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | The TTL of generated tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.locationalKmsKeys">locationalKmsKeys</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Locational KMS keys for encryption. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The target project to manage secrets in. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.replicationLocations">replicationLocations</a></code> | <code>java.util.List<java.lang.String></code> | Replication locations for secrets. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.secretNameTemplate">secretNameTemplate</a></code> | <code>java.lang.String</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Service Account to impersonate for workload identity federation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name of the GCP destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#name SecretsSyncGcpDestination#name}

---

##### `allowedIpv4Addresses`<sup>Optional</sup> <a name="allowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.allowedIpv4Addresses"></a>

- *Type:* java.util.List<java.lang.String>

Allowed IPv4 addresses for outbound network connectivity in CIDR notation. If not set, all IPv4 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#allowed_ipv4_addresses SecretsSyncGcpDestination#allowed_ipv4_addresses}

---

##### `allowedIpv6Addresses`<sup>Optional</sup> <a name="allowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.allowedIpv6Addresses"></a>

- *Type:* java.util.List<java.lang.String>

Allowed IPv6 addresses for outbound network connectivity in CIDR notation. If not set, all IPv6 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#allowed_ipv6_addresses SecretsSyncGcpDestination#allowed_ipv6_addresses}

---

##### `allowedPorts`<sup>Optional</sup> <a name="allowedPorts" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.allowedPorts"></a>

- *Type:* java.util.List<java.lang.Number>

Allowed ports for outbound network connectivity. If not set, all ports are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#allowed_ports SecretsSyncGcpDestination#allowed_ports}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.credentials"></a>

- *Type:* java.lang.String

JSON-encoded credentials to use to connect to GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#credentials SecretsSyncGcpDestination#credentials}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.customTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#custom_tags SecretsSyncGcpDestination#custom_tags}

---

##### `disableStrictNetworking`<sup>Optional</sup> <a name="disableStrictNetworking" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.disableStrictNetworking"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable strict networking requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#disable_strict_networking SecretsSyncGcpDestination#disable_strict_networking}

---

##### `globalKmsKey`<sup>Optional</sup> <a name="globalKmsKey" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.globalKmsKey"></a>

- *Type:* java.lang.String

Global KMS key for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#global_kms_key SecretsSyncGcpDestination#global_kms_key}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.granularity"></a>

- *Type:* java.lang.String

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#granularity SecretsSyncGcpDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#id SecretsSyncGcpDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenAudienceWo`<sup>Optional</sup> <a name="identityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.identityTokenAudienceWo"></a>

- *Type:* java.lang.String

The audience claim value for identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#identity_token_audience_wo SecretsSyncGcpDestination#identity_token_audience_wo}

---

##### `identityTokenAudienceWoVersion`<sup>Optional</sup> <a name="identityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.identityTokenAudienceWoVersion"></a>

- *Type:* java.lang.Number

A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#identity_token_audience_wo_version SecretsSyncGcpDestination#identity_token_audience_wo_version}

---

##### `identityTokenKeyWo`<sup>Optional</sup> <a name="identityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.identityTokenKeyWo"></a>

- *Type:* java.lang.String

The key to use for signing identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#identity_token_key_wo SecretsSyncGcpDestination#identity_token_key_wo}

---

##### `identityTokenKeyWoVersion`<sup>Optional</sup> <a name="identityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.identityTokenKeyWoVersion"></a>

- *Type:* java.lang.Number

A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#identity_token_key_wo_version SecretsSyncGcpDestination#identity_token_key_wo_version}

---

##### `identityTokenTtl`<sup>Optional</sup> <a name="identityTokenTtl" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.identityTokenTtl"></a>

- *Type:* java.lang.Number

The TTL of generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#identity_token_ttl SecretsSyncGcpDestination#identity_token_ttl}

---

##### `locationalKmsKeys`<sup>Optional</sup> <a name="locationalKmsKeys" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.locationalKmsKeys"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Locational KMS keys for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#locational_kms_keys SecretsSyncGcpDestination#locational_kms_keys}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#namespace SecretsSyncGcpDestination#namespace}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The target project to manage secrets in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#project_id SecretsSyncGcpDestination#project_id}

---

##### `replicationLocations`<sup>Optional</sup> <a name="replicationLocations" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.replicationLocations"></a>

- *Type:* java.util.List<java.lang.String>

Replication locations for secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#replication_locations SecretsSyncGcpDestination#replication_locations}

---

##### `secretNameTemplate`<sup>Optional</sup> <a name="secretNameTemplate" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.secretNameTemplate"></a>

- *Type:* java.lang.String

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#secret_name_template SecretsSyncGcpDestination#secret_name_template}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.serviceAccountEmail"></a>

- *Type:* java.lang.String

Service Account to impersonate for workload identity federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#service_account_email SecretsSyncGcpDestination#service_account_email}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv4Addresses">resetAllowedIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv6Addresses">resetAllowedIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedPorts">resetAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetDisableStrictNetworking">resetDisableStrictNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGlobalKmsKey">resetGlobalKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGranularity">resetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenAudienceWo">resetIdentityTokenAudienceWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenAudienceWoVersion">resetIdentityTokenAudienceWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenKeyWo">resetIdentityTokenKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenKeyWoVersion">resetIdentityTokenKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenTtl">resetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetLocationalKmsKeys">resetLocationalKmsKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetReplicationLocations">resetReplicationLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetSecretNameTemplate">resetSecretNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedIpv4Addresses` <a name="resetAllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv4Addresses"></a>

```java
public void resetAllowedIpv4Addresses()
```

##### `resetAllowedIpv6Addresses` <a name="resetAllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv6Addresses"></a>

```java
public void resetAllowedIpv6Addresses()
```

##### `resetAllowedPorts` <a name="resetAllowedPorts" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedPorts"></a>

```java
public void resetAllowedPorts()
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCustomTags"></a>

```java
public void resetCustomTags()
```

##### `resetDisableStrictNetworking` <a name="resetDisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetDisableStrictNetworking"></a>

```java
public void resetDisableStrictNetworking()
```

##### `resetGlobalKmsKey` <a name="resetGlobalKmsKey" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGlobalKmsKey"></a>

```java
public void resetGlobalKmsKey()
```

##### `resetGranularity` <a name="resetGranularity" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGranularity"></a>

```java
public void resetGranularity()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityTokenAudienceWo` <a name="resetIdentityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenAudienceWo"></a>

```java
public void resetIdentityTokenAudienceWo()
```

##### `resetIdentityTokenAudienceWoVersion` <a name="resetIdentityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenAudienceWoVersion"></a>

```java
public void resetIdentityTokenAudienceWoVersion()
```

##### `resetIdentityTokenKeyWo` <a name="resetIdentityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenKeyWo"></a>

```java
public void resetIdentityTokenKeyWo()
```

##### `resetIdentityTokenKeyWoVersion` <a name="resetIdentityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenKeyWoVersion"></a>

```java
public void resetIdentityTokenKeyWoVersion()
```

##### `resetIdentityTokenTtl` <a name="resetIdentityTokenTtl" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenTtl"></a>

```java
public void resetIdentityTokenTtl()
```

##### `resetLocationalKmsKeys` <a name="resetLocationalKmsKeys" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetLocationalKmsKeys"></a>

```java
public void resetLocationalKmsKeys()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetReplicationLocations` <a name="resetReplicationLocations" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetReplicationLocations"></a>

```java
public void resetReplicationLocations()
```

##### `resetSecretNameTemplate` <a name="resetSecretNameTemplate" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetSecretNameTemplate"></a>

```java
public void resetSecretNameTemplate()
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsSyncGcpDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct"></a>

```java
import io.cdktn.providers.vault.secrets_sync_gcp_destination.SecretsSyncGcpDestination;

SecretsSyncGcpDestination.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.secrets_sync_gcp_destination.SecretsSyncGcpDestination;

SecretsSyncGcpDestination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.secrets_sync_gcp_destination.SecretsSyncGcpDestination;

SecretsSyncGcpDestination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.secrets_sync_gcp_destination.SecretsSyncGcpDestination;

SecretsSyncGcpDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecretsSyncGcpDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecretsSyncGcpDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecretsSyncGcpDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecretsSyncGcpDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecretsSyncGcpDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4AddressesInput">allowedIpv4AddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6AddressesInput">allowedIpv6AddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPortsInput">allowedPortsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentialsInput">credentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTagsInput">customTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworkingInput">disableStrictNetworkingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKeyInput">globalKmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularityInput">granularityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWoInput">identityTokenAudienceWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWoVersionInput">identityTokenAudienceWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWoInput">identityTokenKeyWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWoVersionInput">identityTokenKeyWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenTtlInput">identityTokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeysInput">locationalKmsKeysInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocationsInput">replicationLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplateInput">secretNameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4Addresses">allowedIpv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6Addresses">allowedIpv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPorts">allowedPorts</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentials">credentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworking">disableStrictNetworking</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKey">globalKmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularity">granularity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWo">identityTokenAudienceWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWoVersion">identityTokenAudienceWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWo">identityTokenKeyWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWoVersion">identityTokenKeyWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeys">locationalKmsKeys</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocations">replicationLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplate">secretNameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `allowedIpv4AddressesInput`<sup>Optional</sup> <a name="allowedIpv4AddressesInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4AddressesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv4AddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIpv6AddressesInput`<sup>Optional</sup> <a name="allowedIpv6AddressesInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6AddressesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv6AddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedPortsInput`<sup>Optional</sup> <a name="allowedPortsInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPortsInput"></a>

```java
public java.util.List<java.lang.Number> getAllowedPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentialsInput"></a>

```java
public java.lang.String getCredentialsInput();
```

- *Type:* java.lang.String

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disableStrictNetworkingInput`<sup>Optional</sup> <a name="disableStrictNetworkingInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworkingInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableStrictNetworkingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `globalKmsKeyInput`<sup>Optional</sup> <a name="globalKmsKeyInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKeyInput"></a>

```java
public java.lang.String getGlobalKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularityInput"></a>

```java
public java.lang.String getGranularityInput();
```

- *Type:* java.lang.String

---

##### `identityTokenAudienceWoInput`<sup>Optional</sup> <a name="identityTokenAudienceWoInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWoInput"></a>

```java
public java.lang.String getIdentityTokenAudienceWoInput();
```

- *Type:* java.lang.String

---

##### `identityTokenAudienceWoVersionInput`<sup>Optional</sup> <a name="identityTokenAudienceWoVersionInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWoVersionInput"></a>

```java
public java.lang.Number getIdentityTokenAudienceWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `identityTokenKeyWoInput`<sup>Optional</sup> <a name="identityTokenKeyWoInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWoInput"></a>

```java
public java.lang.String getIdentityTokenKeyWoInput();
```

- *Type:* java.lang.String

---

##### `identityTokenKeyWoVersionInput`<sup>Optional</sup> <a name="identityTokenKeyWoVersionInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWoVersionInput"></a>

```java
public java.lang.Number getIdentityTokenKeyWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `identityTokenTtlInput`<sup>Optional</sup> <a name="identityTokenTtlInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenTtlInput"></a>

```java
public java.lang.Number getIdentityTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationalKmsKeysInput`<sup>Optional</sup> <a name="locationalKmsKeysInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeysInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLocationalKmsKeysInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `replicationLocationsInput`<sup>Optional</sup> <a name="replicationLocationsInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocationsInput"></a>

```java
public java.util.List<java.lang.String> getReplicationLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretNameTemplateInput`<sup>Optional</sup> <a name="secretNameTemplateInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplateInput"></a>

```java
public java.lang.String getSecretNameTemplateInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `allowedIpv4Addresses`<sup>Required</sup> <a name="allowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIpv6Addresses`<sup>Required</sup> <a name="allowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedPorts`<sup>Required</sup> <a name="allowedPorts" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPorts"></a>

```java
public java.util.List<java.lang.Number> getAllowedPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `disableStrictNetworking`<sup>Required</sup> <a name="disableStrictNetworking" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworking"></a>

```java
public java.lang.Boolean|IResolvable getDisableStrictNetworking();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `globalKmsKey`<sup>Required</sup> <a name="globalKmsKey" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKey"></a>

```java
public java.lang.String getGlobalKmsKey();
```

- *Type:* java.lang.String

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityTokenAudienceWo`<sup>Required</sup> <a name="identityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWo"></a>

```java
public java.lang.String getIdentityTokenAudienceWo();
```

- *Type:* java.lang.String

---

##### `identityTokenAudienceWoVersion`<sup>Required</sup> <a name="identityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWoVersion"></a>

```java
public java.lang.Number getIdentityTokenAudienceWoVersion();
```

- *Type:* java.lang.Number

---

##### `identityTokenKeyWo`<sup>Required</sup> <a name="identityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWo"></a>

```java
public java.lang.String getIdentityTokenKeyWo();
```

- *Type:* java.lang.String

---

##### `identityTokenKeyWoVersion`<sup>Required</sup> <a name="identityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWoVersion"></a>

```java
public java.lang.Number getIdentityTokenKeyWoVersion();
```

- *Type:* java.lang.Number

---

##### `identityTokenTtl`<sup>Required</sup> <a name="identityTokenTtl" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenTtl"></a>

```java
public java.lang.Number getIdentityTokenTtl();
```

- *Type:* java.lang.Number

---

##### `locationalKmsKeys`<sup>Required</sup> <a name="locationalKmsKeys" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeys"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLocationalKmsKeys();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `replicationLocations`<sup>Required</sup> <a name="replicationLocations" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocations"></a>

```java
public java.util.List<java.lang.String> getReplicationLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretNameTemplate`<sup>Required</sup> <a name="secretNameTemplate" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplate"></a>

```java
public java.lang.String getSecretNameTemplate();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncGcpDestinationConfig <a name="SecretsSyncGcpDestinationConfig" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.secrets_sync_gcp_destination.SecretsSyncGcpDestinationConfig;

SecretsSyncGcpDestinationConfig.builder()
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
//  .credentials(java.lang.String)
//  .customTags(java.util.Map<java.lang.String, java.lang.String>)
//  .disableStrictNetworking(java.lang.Boolean|IResolvable)
//  .globalKmsKey(java.lang.String)
//  .granularity(java.lang.String)
//  .id(java.lang.String)
//  .identityTokenAudienceWo(java.lang.String)
//  .identityTokenAudienceWoVersion(java.lang.Number)
//  .identityTokenKeyWo(java.lang.String)
//  .identityTokenKeyWoVersion(java.lang.Number)
//  .identityTokenTtl(java.lang.Number)
//  .locationalKmsKeys(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .projectId(java.lang.String)
//  .replicationLocations(java.util.List<java.lang.String>)
//  .secretNameTemplate(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name of the GCP destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv4Addresses">allowedIpv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Allowed IPv4 addresses for outbound network connectivity in CIDR notation. If not set, all IPv4 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv6Addresses">allowedIpv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Allowed IPv6 addresses for outbound network connectivity in CIDR notation. If not set, all IPv6 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedPorts">allowedPorts</a></code> | <code>java.util.List<java.lang.Number></code> | Allowed ports for outbound network connectivity. If not set, all ports are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.credentials">credentials</a></code> | <code>java.lang.String</code> | JSON-encoded credentials to use to connect to GCP. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.disableStrictNetworking">disableStrictNetworking</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable strict networking requirements. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.globalKmsKey">globalKmsKey</a></code> | <code>java.lang.String</code> | Global KMS key for encryption. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.granularity">granularity</a></code> | <code>java.lang.String</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#id SecretsSyncGcpDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenAudienceWo">identityTokenAudienceWo</a></code> | <code>java.lang.String</code> | The audience claim value for identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenAudienceWoVersion">identityTokenAudienceWoVersion</a></code> | <code>java.lang.Number</code> | A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenKeyWo">identityTokenKeyWo</a></code> | <code>java.lang.String</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenKeyWoVersion">identityTokenKeyWoVersion</a></code> | <code>java.lang.Number</code> | A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenTtl">identityTokenTtl</a></code> | <code>java.lang.Number</code> | The TTL of generated tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.locationalKmsKeys">locationalKmsKeys</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Locational KMS keys for encryption. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The target project to manage secrets in. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.replicationLocations">replicationLocations</a></code> | <code>java.util.List<java.lang.String></code> | Replication locations for secrets. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.secretNameTemplate">secretNameTemplate</a></code> | <code>java.lang.String</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Service Account to impersonate for workload identity federation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name of the GCP destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#name SecretsSyncGcpDestination#name}

---

##### `allowedIpv4Addresses`<sup>Optional</sup> <a name="allowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv4Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

Allowed IPv4 addresses for outbound network connectivity in CIDR notation. If not set, all IPv4 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#allowed_ipv4_addresses SecretsSyncGcpDestination#allowed_ipv4_addresses}

---

##### `allowedIpv6Addresses`<sup>Optional</sup> <a name="allowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv6Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

Allowed IPv6 addresses for outbound network connectivity in CIDR notation. If not set, all IPv6 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#allowed_ipv6_addresses SecretsSyncGcpDestination#allowed_ipv6_addresses}

---

##### `allowedPorts`<sup>Optional</sup> <a name="allowedPorts" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedPorts"></a>

```java
public java.util.List<java.lang.Number> getAllowedPorts();
```

- *Type:* java.util.List<java.lang.Number>

Allowed ports for outbound network connectivity. If not set, all ports are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#allowed_ports SecretsSyncGcpDestination#allowed_ports}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

JSON-encoded credentials to use to connect to GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#credentials SecretsSyncGcpDestination#credentials}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.customTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#custom_tags SecretsSyncGcpDestination#custom_tags}

---

##### `disableStrictNetworking`<sup>Optional</sup> <a name="disableStrictNetworking" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.disableStrictNetworking"></a>

```java
public java.lang.Boolean|IResolvable getDisableStrictNetworking();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable strict networking requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#disable_strict_networking SecretsSyncGcpDestination#disable_strict_networking}

---

##### `globalKmsKey`<sup>Optional</sup> <a name="globalKmsKey" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.globalKmsKey"></a>

```java
public java.lang.String getGlobalKmsKey();
```

- *Type:* java.lang.String

Global KMS key for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#global_kms_key SecretsSyncGcpDestination#global_kms_key}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#granularity SecretsSyncGcpDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#id SecretsSyncGcpDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenAudienceWo`<sup>Optional</sup> <a name="identityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenAudienceWo"></a>

```java
public java.lang.String getIdentityTokenAudienceWo();
```

- *Type:* java.lang.String

The audience claim value for identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#identity_token_audience_wo SecretsSyncGcpDestination#identity_token_audience_wo}

---

##### `identityTokenAudienceWoVersion`<sup>Optional</sup> <a name="identityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenAudienceWoVersion"></a>

```java
public java.lang.Number getIdentityTokenAudienceWoVersion();
```

- *Type:* java.lang.Number

A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#identity_token_audience_wo_version SecretsSyncGcpDestination#identity_token_audience_wo_version}

---

##### `identityTokenKeyWo`<sup>Optional</sup> <a name="identityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenKeyWo"></a>

```java
public java.lang.String getIdentityTokenKeyWo();
```

- *Type:* java.lang.String

The key to use for signing identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#identity_token_key_wo SecretsSyncGcpDestination#identity_token_key_wo}

---

##### `identityTokenKeyWoVersion`<sup>Optional</sup> <a name="identityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenKeyWoVersion"></a>

```java
public java.lang.Number getIdentityTokenKeyWoVersion();
```

- *Type:* java.lang.Number

A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#identity_token_key_wo_version SecretsSyncGcpDestination#identity_token_key_wo_version}

---

##### `identityTokenTtl`<sup>Optional</sup> <a name="identityTokenTtl" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenTtl"></a>

```java
public java.lang.Number getIdentityTokenTtl();
```

- *Type:* java.lang.Number

The TTL of generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#identity_token_ttl SecretsSyncGcpDestination#identity_token_ttl}

---

##### `locationalKmsKeys`<sup>Optional</sup> <a name="locationalKmsKeys" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.locationalKmsKeys"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLocationalKmsKeys();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Locational KMS keys for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#locational_kms_keys SecretsSyncGcpDestination#locational_kms_keys}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#namespace SecretsSyncGcpDestination#namespace}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The target project to manage secrets in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#project_id SecretsSyncGcpDestination#project_id}

---

##### `replicationLocations`<sup>Optional</sup> <a name="replicationLocations" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.replicationLocations"></a>

```java
public java.util.List<java.lang.String> getReplicationLocations();
```

- *Type:* java.util.List<java.lang.String>

Replication locations for secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#replication_locations SecretsSyncGcpDestination#replication_locations}

---

##### `secretNameTemplate`<sup>Optional</sup> <a name="secretNameTemplate" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.secretNameTemplate"></a>

```java
public java.lang.String getSecretNameTemplate();
```

- *Type:* java.lang.String

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#secret_name_template SecretsSyncGcpDestination#secret_name_template}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Service Account to impersonate for workload identity federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/secrets_sync_gcp_destination#service_account_email SecretsSyncGcpDestination#service_account_email}

---



