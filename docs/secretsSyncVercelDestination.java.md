# `secretsSyncVercelDestination` Submodule <a name="`secretsSyncVercelDestination` Submodule" id="@cdktn/provider-vault.secretsSyncVercelDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncVercelDestination <a name="SecretsSyncVercelDestination" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination vault_secrets_sync_vercel_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer"></a>

```java
import io.cdktn.providers.vault.secrets_sync_vercel_destination.SecretsSyncVercelDestination;

SecretsSyncVercelDestination.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessToken(java.lang.String)
    .deploymentEnvironments(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .projectId(java.lang.String)
//  .allowedIpv4Addresses(java.util.List<java.lang.String>)
//  .allowedIpv6Addresses(java.util.List<java.lang.String>)
//  .allowedPorts(java.util.List<java.lang.Number>)
//  .disableStrictNetworking(java.lang.Boolean|IResolvable)
//  .granularity(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .secretNameTemplate(java.lang.String)
//  .teamId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.accessToken">accessToken</a></code> | <code>java.lang.String</code> | Vercel API access token with the permissions to manage environment variables. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.deploymentEnvironments">deploymentEnvironments</a></code> | <code>java.util.List<java.lang.String></code> | Deployment environments where the environment variables are available. Accepts 'development', 'preview' & 'production'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name of the Vercel destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Project ID where to manage environment variables. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.allowedIpv4Addresses">allowedIpv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Set of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.allowedIpv6Addresses">allowedIpv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Set of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.allowedPorts">allowedPorts</a></code> | <code>java.util.List<java.lang.Number></code> | Set of allowed ports for outbound connections from Vault to the destination. If not set, all ports are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.disableStrictNetworking">disableStrictNetworking</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, disables strict networking enforcement for this destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.granularity">granularity</a></code> | <code>java.lang.String</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#id SecretsSyncVercelDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.secretNameTemplate">secretNameTemplate</a></code> | <code>java.lang.String</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.teamId">teamId</a></code> | <code>java.lang.String</code> | Team ID the project belongs to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.accessToken"></a>

- *Type:* java.lang.String

Vercel API access token with the permissions to manage environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#access_token SecretsSyncVercelDestination#access_token}

---

##### `deploymentEnvironments`<sup>Required</sup> <a name="deploymentEnvironments" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.deploymentEnvironments"></a>

- *Type:* java.util.List<java.lang.String>

Deployment environments where the environment variables are available. Accepts 'development', 'preview' & 'production'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#deployment_environments SecretsSyncVercelDestination#deployment_environments}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name of the Vercel destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#name SecretsSyncVercelDestination#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Project ID where to manage environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#project_id SecretsSyncVercelDestination#project_id}

---

##### `allowedIpv4Addresses`<sup>Optional</sup> <a name="allowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.allowedIpv4Addresses"></a>

- *Type:* java.util.List<java.lang.String>

Set of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#allowed_ipv4_addresses SecretsSyncVercelDestination#allowed_ipv4_addresses}

---

##### `allowedIpv6Addresses`<sup>Optional</sup> <a name="allowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.allowedIpv6Addresses"></a>

- *Type:* java.util.List<java.lang.String>

Set of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#allowed_ipv6_addresses SecretsSyncVercelDestination#allowed_ipv6_addresses}

---

##### `allowedPorts`<sup>Optional</sup> <a name="allowedPorts" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.allowedPorts"></a>

- *Type:* java.util.List<java.lang.Number>

Set of allowed ports for outbound connections from Vault to the destination. If not set, all ports are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#allowed_ports SecretsSyncVercelDestination#allowed_ports}

---

##### `disableStrictNetworking`<sup>Optional</sup> <a name="disableStrictNetworking" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.disableStrictNetworking"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, disables strict networking enforcement for this destination.

When disabled, Vault will not enforce allowed IP addresses and ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#disable_strict_networking SecretsSyncVercelDestination#disable_strict_networking}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.granularity"></a>

- *Type:* java.lang.String

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#granularity SecretsSyncVercelDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#id SecretsSyncVercelDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#namespace SecretsSyncVercelDestination#namespace}

---

##### `secretNameTemplate`<sup>Optional</sup> <a name="secretNameTemplate" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.secretNameTemplate"></a>

- *Type:* java.lang.String

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#secret_name_template SecretsSyncVercelDestination#secret_name_template}

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.teamId"></a>

- *Type:* java.lang.String

Team ID the project belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#team_id SecretsSyncVercelDestination#team_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetAllowedIpv4Addresses">resetAllowedIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetAllowedIpv6Addresses">resetAllowedIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetAllowedPorts">resetAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetDisableStrictNetworking">resetDisableStrictNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetGranularity">resetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetSecretNameTemplate">resetSecretNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetTeamId">resetTeamId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedIpv4Addresses` <a name="resetAllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetAllowedIpv4Addresses"></a>

```java
public void resetAllowedIpv4Addresses()
```

##### `resetAllowedIpv6Addresses` <a name="resetAllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetAllowedIpv6Addresses"></a>

```java
public void resetAllowedIpv6Addresses()
```

##### `resetAllowedPorts` <a name="resetAllowedPorts" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetAllowedPorts"></a>

```java
public void resetAllowedPorts()
```

##### `resetDisableStrictNetworking` <a name="resetDisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetDisableStrictNetworking"></a>

```java
public void resetDisableStrictNetworking()
```

##### `resetGranularity` <a name="resetGranularity" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetGranularity"></a>

```java
public void resetGranularity()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetSecretNameTemplate` <a name="resetSecretNameTemplate" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetSecretNameTemplate"></a>

```java
public void resetSecretNameTemplate()
```

##### `resetTeamId` <a name="resetTeamId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetTeamId"></a>

```java
public void resetTeamId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsSyncVercelDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isConstruct"></a>

```java
import io.cdktn.providers.vault.secrets_sync_vercel_destination.SecretsSyncVercelDestination;

SecretsSyncVercelDestination.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.secrets_sync_vercel_destination.SecretsSyncVercelDestination;

SecretsSyncVercelDestination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.secrets_sync_vercel_destination.SecretsSyncVercelDestination;

SecretsSyncVercelDestination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.secrets_sync_vercel_destination.SecretsSyncVercelDestination;

SecretsSyncVercelDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecretsSyncVercelDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecretsSyncVercelDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecretsSyncVercelDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecretsSyncVercelDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecretsSyncVercelDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessTokenInput">accessTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv4AddressesInput">allowedIpv4AddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv6AddressesInput">allowedIpv6AddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedPortsInput">allowedPortsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironmentsInput">deploymentEnvironmentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.disableStrictNetworkingInput">disableStrictNetworkingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularityInput">granularityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplateInput">secretNameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv4Addresses">allowedIpv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv6Addresses">allowedIpv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedPorts">allowedPorts</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironments">deploymentEnvironments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.disableStrictNetworking">disableStrictNetworking</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularity">granularity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplate">secretNameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessTokenInput"></a>

```java
public java.lang.String getAccessTokenInput();
```

- *Type:* java.lang.String

---

##### `allowedIpv4AddressesInput`<sup>Optional</sup> <a name="allowedIpv4AddressesInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv4AddressesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv4AddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIpv6AddressesInput`<sup>Optional</sup> <a name="allowedIpv6AddressesInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv6AddressesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv6AddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedPortsInput`<sup>Optional</sup> <a name="allowedPortsInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedPortsInput"></a>

```java
public java.util.List<java.lang.Number> getAllowedPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `deploymentEnvironmentsInput`<sup>Optional</sup> <a name="deploymentEnvironmentsInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironmentsInput"></a>

```java
public java.util.List<java.lang.String> getDeploymentEnvironmentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disableStrictNetworkingInput`<sup>Optional</sup> <a name="disableStrictNetworkingInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.disableStrictNetworkingInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableStrictNetworkingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularityInput"></a>

```java
public java.lang.String getGranularityInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `secretNameTemplateInput`<sup>Optional</sup> <a name="secretNameTemplateInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplateInput"></a>

```java
public java.lang.String getSecretNameTemplateInput();
```

- *Type:* java.lang.String

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

---

##### `allowedIpv4Addresses`<sup>Required</sup> <a name="allowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv4Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedIpv6Addresses`<sup>Required</sup> <a name="allowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedIpv6Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedPorts`<sup>Required</sup> <a name="allowedPorts" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.allowedPorts"></a>

```java
public java.util.List<java.lang.Number> getAllowedPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `deploymentEnvironments`<sup>Required</sup> <a name="deploymentEnvironments" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironments"></a>

```java
public java.util.List<java.lang.String> getDeploymentEnvironments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disableStrictNetworking`<sup>Required</sup> <a name="disableStrictNetworking" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.disableStrictNetworking"></a>

```java
public java.lang.Boolean|IResolvable getDisableStrictNetworking();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `secretNameTemplate`<sup>Required</sup> <a name="secretNameTemplate" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplate"></a>

```java
public java.lang.String getSecretNameTemplate();
```

- *Type:* java.lang.String

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncVercelDestinationConfig <a name="SecretsSyncVercelDestinationConfig" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.secrets_sync_vercel_destination.SecretsSyncVercelDestinationConfig;

SecretsSyncVercelDestinationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessToken(java.lang.String)
    .deploymentEnvironments(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .projectId(java.lang.String)
//  .allowedIpv4Addresses(java.util.List<java.lang.String>)
//  .allowedIpv6Addresses(java.util.List<java.lang.String>)
//  .allowedPorts(java.util.List<java.lang.Number>)
//  .disableStrictNetworking(java.lang.Boolean|IResolvable)
//  .granularity(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .secretNameTemplate(java.lang.String)
//  .teamId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | Vercel API access token with the permissions to manage environment variables. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.deploymentEnvironments">deploymentEnvironments</a></code> | <code>java.util.List<java.lang.String></code> | Deployment environments where the environment variables are available. Accepts 'development', 'preview' & 'production'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name of the Vercel destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Project ID where to manage environment variables. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.allowedIpv4Addresses">allowedIpv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Set of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.allowedIpv6Addresses">allowedIpv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | Set of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.allowedPorts">allowedPorts</a></code> | <code>java.util.List<java.lang.Number></code> | Set of allowed ports for outbound connections from Vault to the destination. If not set, all ports are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.disableStrictNetworking">disableStrictNetworking</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, disables strict networking enforcement for this destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.granularity">granularity</a></code> | <code>java.lang.String</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#id SecretsSyncVercelDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.secretNameTemplate">secretNameTemplate</a></code> | <code>java.lang.String</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.teamId">teamId</a></code> | <code>java.lang.String</code> | Team ID the project belongs to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

Vercel API access token with the permissions to manage environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#access_token SecretsSyncVercelDestination#access_token}

---

##### `deploymentEnvironments`<sup>Required</sup> <a name="deploymentEnvironments" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.deploymentEnvironments"></a>

```java
public java.util.List<java.lang.String> getDeploymentEnvironments();
```

- *Type:* java.util.List<java.lang.String>

Deployment environments where the environment variables are available. Accepts 'development', 'preview' & 'production'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#deployment_environments SecretsSyncVercelDestination#deployment_environments}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name of the Vercel destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#name SecretsSyncVercelDestination#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Project ID where to manage environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#project_id SecretsSyncVercelDestination#project_id}

---

##### `allowedIpv4Addresses`<sup>Optional</sup> <a name="allowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.allowedIpv4Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

Set of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#allowed_ipv4_addresses SecretsSyncVercelDestination#allowed_ipv4_addresses}

---

##### `allowedIpv6Addresses`<sup>Optional</sup> <a name="allowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.allowedIpv6Addresses"></a>

```java
public java.util.List<java.lang.String> getAllowedIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

Set of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#allowed_ipv6_addresses SecretsSyncVercelDestination#allowed_ipv6_addresses}

---

##### `allowedPorts`<sup>Optional</sup> <a name="allowedPorts" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.allowedPorts"></a>

```java
public java.util.List<java.lang.Number> getAllowedPorts();
```

- *Type:* java.util.List<java.lang.Number>

Set of allowed ports for outbound connections from Vault to the destination. If not set, all ports are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#allowed_ports SecretsSyncVercelDestination#allowed_ports}

---

##### `disableStrictNetworking`<sup>Optional</sup> <a name="disableStrictNetworking" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.disableStrictNetworking"></a>

```java
public java.lang.Boolean|IResolvable getDisableStrictNetworking();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, disables strict networking enforcement for this destination.

When disabled, Vault will not enforce allowed IP addresses and ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#disable_strict_networking SecretsSyncVercelDestination#disable_strict_networking}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#granularity SecretsSyncVercelDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#id SecretsSyncVercelDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#namespace SecretsSyncVercelDestination#namespace}

---

##### `secretNameTemplate`<sup>Optional</sup> <a name="secretNameTemplate" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.secretNameTemplate"></a>

```java
public java.lang.String getSecretNameTemplate();
```

- *Type:* java.lang.String

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#secret_name_template SecretsSyncVercelDestination#secret_name_template}

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktn/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

Team ID the project belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_vercel_destination#team_id SecretsSyncVercelDestination#team_id}

---



