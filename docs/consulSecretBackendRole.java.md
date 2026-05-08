# `consulSecretBackendRole` Submodule <a name="`consulSecretBackendRole` Submodule" id="@cdktn/provider-vault.consulSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulSecretBackendRole <a name="ConsulSecretBackendRole" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role vault_consul_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer"></a>

```java
import io.cdktn.providers.vault.consul_secret_backend_role.ConsulSecretBackendRole;

ConsulSecretBackendRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .backend(java.lang.String)
//  .consulNamespace(java.lang.String)
//  .consulPolicies(java.util.List<java.lang.String>)
//  .consulRoles(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .local(java.lang.Boolean|IResolvable)
//  .maxTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .nodeIdentities(java.util.List<java.lang.String>)
//  .partition(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
//  .serviceIdentities(java.util.List<java.lang.String>)
//  .ttl(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of an existing role against which to create this Consul credential. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The path of the Consul Secret Backend the role belongs to. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.consulNamespace">consulNamespace</a></code> | <code>java.lang.String</code> | The Consul namespace that the token will be created in. Applicable for Vault 1.10+ and Consul 1.7+. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.consulPolicies">consulPolicies</a></code> | <code>java.util.List<java.lang.String></code> | List of Consul policies to associate with this role. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.consulRoles">consulRoles</a></code> | <code>java.util.List<java.lang.String></code> | Set of Consul roles to attach to the token. Applicable for Vault 1.10+ with Consul 1.5+. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#id ConsulSecretBackendRole#id}. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.local">local</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates that the token should not be replicated globally and instead be local to the current datacenter. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | Maximum TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.nodeIdentities">nodeIdentities</a></code> | <code>java.util.List<java.lang.String></code> | Set of Consul node identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.8+. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.partition">partition</a></code> | <code>java.lang.String</code> | The Consul admin partition that the token will be created in. Applicable for Vault 1.10+ and Consul 1.11+. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | List of Consul policies to associate with this role. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.serviceIdentities">serviceIdentities</a></code> | <code>java.util.List<java.lang.String></code> | Set of Consul service identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.5+. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Specifies the TTL for this role. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of an existing role against which to create this Consul credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#name ConsulSecretBackendRole#name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The path of the Consul Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#backend ConsulSecretBackendRole#backend}

---

##### `consulNamespace`<sup>Optional</sup> <a name="consulNamespace" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.consulNamespace"></a>

- *Type:* java.lang.String

The Consul namespace that the token will be created in. Applicable for Vault 1.10+ and Consul 1.7+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#consul_namespace ConsulSecretBackendRole#consul_namespace}

---

##### `consulPolicies`<sup>Optional</sup> <a name="consulPolicies" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.consulPolicies"></a>

- *Type:* java.util.List<java.lang.String>

List of Consul policies to associate with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#consul_policies ConsulSecretBackendRole#consul_policies}

---

##### `consulRoles`<sup>Optional</sup> <a name="consulRoles" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.consulRoles"></a>

- *Type:* java.util.List<java.lang.String>

Set of Consul roles to attach to the token. Applicable for Vault 1.10+ with Consul 1.5+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#consul_roles ConsulSecretBackendRole#consul_roles}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#id ConsulSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.local"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates that the token should not be replicated globally and instead be local to the current datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#local ConsulSecretBackendRole#local}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.Number

Maximum TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#max_ttl ConsulSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#namespace ConsulSecretBackendRole#namespace}

---

##### `nodeIdentities`<sup>Optional</sup> <a name="nodeIdentities" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.nodeIdentities"></a>

- *Type:* java.util.List<java.lang.String>

Set of Consul node identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.8+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#node_identities ConsulSecretBackendRole#node_identities}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.partition"></a>

- *Type:* java.lang.String

The Consul admin partition that the token will be created in. Applicable for Vault 1.10+ and Consul 1.11+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#partition ConsulSecretBackendRole#partition}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.policies"></a>

- *Type:* java.util.List<java.lang.String>

List of Consul policies to associate with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#policies ConsulSecretBackendRole#policies}

---

##### `serviceIdentities`<sup>Optional</sup> <a name="serviceIdentities" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.serviceIdentities"></a>

- *Type:* java.util.List<java.lang.String>

Set of Consul service identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.5+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#service_identities ConsulSecretBackendRole#service_identities}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Specifies the TTL for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#ttl ConsulSecretBackendRole#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulNamespace">resetConsulNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulPolicies">resetConsulPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulRoles">resetConsulRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetNodeIdentities">resetNodeIdentities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetServiceIdentities">resetServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackend` <a name="resetBackend" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetConsulNamespace` <a name="resetConsulNamespace" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulNamespace"></a>

```java
public void resetConsulNamespace()
```

##### `resetConsulPolicies` <a name="resetConsulPolicies" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulPolicies"></a>

```java
public void resetConsulPolicies()
```

##### `resetConsulRoles` <a name="resetConsulRoles" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulRoles"></a>

```java
public void resetConsulRoles()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetLocal` <a name="resetLocal" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetLocal"></a>

```java
public void resetLocal()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNodeIdentities` <a name="resetNodeIdentities" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetNodeIdentities"></a>

```java
public void resetNodeIdentities()
```

##### `resetPartition` <a name="resetPartition" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetPolicies"></a>

```java
public void resetPolicies()
```

##### `resetServiceIdentities` <a name="resetServiceIdentities" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetServiceIdentities"></a>

```java
public void resetServiceIdentities()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConsulSecretBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isConstruct"></a>

```java
import io.cdktn.providers.vault.consul_secret_backend_role.ConsulSecretBackendRole;

ConsulSecretBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.consul_secret_backend_role.ConsulSecretBackendRole;

ConsulSecretBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.consul_secret_backend_role.ConsulSecretBackendRole;

ConsulSecretBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.consul_secret_backend_role.ConsulSecretBackendRole;

ConsulSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConsulSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConsulSecretBackendRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConsulSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConsulSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConsulSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulNamespaceInput">consulNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulPoliciesInput">consulPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulRolesInput">consulRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.localInput">localInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nodeIdentitiesInput">nodeIdentitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.policiesInput">policiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.serviceIdentitiesInput">serviceIdentitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulNamespace">consulNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulPolicies">consulPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulRoles">consulRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.local">local</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nodeIdentities">nodeIdentities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.serviceIdentities">serviceIdentities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `consulNamespaceInput`<sup>Optional</sup> <a name="consulNamespaceInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulNamespaceInput"></a>

```java
public java.lang.String getConsulNamespaceInput();
```

- *Type:* java.lang.String

---

##### `consulPoliciesInput`<sup>Optional</sup> <a name="consulPoliciesInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getConsulPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `consulRolesInput`<sup>Optional</sup> <a name="consulRolesInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulRolesInput"></a>

```java
public java.util.List<java.lang.String> getConsulRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.localInput"></a>

```java
public java.lang.Boolean|IResolvable getLocalInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.maxTtlInput"></a>

```java
public java.lang.Number getMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `nodeIdentitiesInput`<sup>Optional</sup> <a name="nodeIdentitiesInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nodeIdentitiesInput"></a>

```java
public java.util.List<java.lang.String> getNodeIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.policiesInput"></a>

```java
public java.util.List<java.lang.String> getPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceIdentitiesInput`<sup>Optional</sup> <a name="serviceIdentitiesInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.serviceIdentitiesInput"></a>

```java
public java.util.List<java.lang.String> getServiceIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `consulNamespace`<sup>Required</sup> <a name="consulNamespace" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulNamespace"></a>

```java
public java.lang.String getConsulNamespace();
```

- *Type:* java.lang.String

---

##### `consulPolicies`<sup>Required</sup> <a name="consulPolicies" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulPolicies"></a>

```java
public java.util.List<java.lang.String> getConsulPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `consulRoles`<sup>Required</sup> <a name="consulRoles" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulRoles"></a>

```java
public java.util.List<java.lang.String> getConsulRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.local"></a>

```java
public java.lang.Boolean|IResolvable getLocal();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `nodeIdentities`<sup>Required</sup> <a name="nodeIdentities" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nodeIdentities"></a>

```java
public java.util.List<java.lang.String> getNodeIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceIdentities`<sup>Required</sup> <a name="serviceIdentities" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.serviceIdentities"></a>

```java
public java.util.List<java.lang.String> getServiceIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulSecretBackendRoleConfig <a name="ConsulSecretBackendRoleConfig" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.consul_secret_backend_role.ConsulSecretBackendRoleConfig;

ConsulSecretBackendRoleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .backend(java.lang.String)
//  .consulNamespace(java.lang.String)
//  .consulPolicies(java.util.List<java.lang.String>)
//  .consulRoles(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .local(java.lang.Boolean|IResolvable)
//  .maxTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .nodeIdentities(java.util.List<java.lang.String>)
//  .partition(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
//  .serviceIdentities(java.util.List<java.lang.String>)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of an existing role against which to create this Consul credential. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The path of the Consul Secret Backend the role belongs to. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulNamespace">consulNamespace</a></code> | <code>java.lang.String</code> | The Consul namespace that the token will be created in. Applicable for Vault 1.10+ and Consul 1.7+. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulPolicies">consulPolicies</a></code> | <code>java.util.List<java.lang.String></code> | List of Consul policies to associate with this role. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulRoles">consulRoles</a></code> | <code>java.util.List<java.lang.String></code> | Set of Consul roles to attach to the token. Applicable for Vault 1.10+ with Consul 1.5+. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#id ConsulSecretBackendRole#id}. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.local">local</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates that the token should not be replicated globally and instead be local to the current datacenter. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | Maximum TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.nodeIdentities">nodeIdentities</a></code> | <code>java.util.List<java.lang.String></code> | Set of Consul node identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.8+. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.partition">partition</a></code> | <code>java.lang.String</code> | The Consul admin partition that the token will be created in. Applicable for Vault 1.10+ and Consul 1.11+. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | List of Consul policies to associate with this role. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.serviceIdentities">serviceIdentities</a></code> | <code>java.util.List<java.lang.String></code> | Set of Consul service identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.5+. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Specifies the TTL for this role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of an existing role against which to create this Consul credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#name ConsulSecretBackendRole#name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The path of the Consul Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#backend ConsulSecretBackendRole#backend}

---

##### `consulNamespace`<sup>Optional</sup> <a name="consulNamespace" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulNamespace"></a>

```java
public java.lang.String getConsulNamespace();
```

- *Type:* java.lang.String

The Consul namespace that the token will be created in. Applicable for Vault 1.10+ and Consul 1.7+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#consul_namespace ConsulSecretBackendRole#consul_namespace}

---

##### `consulPolicies`<sup>Optional</sup> <a name="consulPolicies" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulPolicies"></a>

```java
public java.util.List<java.lang.String> getConsulPolicies();
```

- *Type:* java.util.List<java.lang.String>

List of Consul policies to associate with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#consul_policies ConsulSecretBackendRole#consul_policies}

---

##### `consulRoles`<sup>Optional</sup> <a name="consulRoles" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulRoles"></a>

```java
public java.util.List<java.lang.String> getConsulRoles();
```

- *Type:* java.util.List<java.lang.String>

Set of Consul roles to attach to the token. Applicable for Vault 1.10+ with Consul 1.5+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#consul_roles ConsulSecretBackendRole#consul_roles}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#id ConsulSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.local"></a>

```java
public java.lang.Boolean|IResolvable getLocal();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates that the token should not be replicated globally and instead be local to the current datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#local ConsulSecretBackendRole#local}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

Maximum TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#max_ttl ConsulSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#namespace ConsulSecretBackendRole#namespace}

---

##### `nodeIdentities`<sup>Optional</sup> <a name="nodeIdentities" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.nodeIdentities"></a>

```java
public java.util.List<java.lang.String> getNodeIdentities();
```

- *Type:* java.util.List<java.lang.String>

Set of Consul node identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.8+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#node_identities ConsulSecretBackendRole#node_identities}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

The Consul admin partition that the token will be created in. Applicable for Vault 1.10+ and Consul 1.11+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#partition ConsulSecretBackendRole#partition}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

List of Consul policies to associate with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#policies ConsulSecretBackendRole#policies}

---

##### `serviceIdentities`<sup>Optional</sup> <a name="serviceIdentities" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.serviceIdentities"></a>

```java
public java.util.List<java.lang.String> getServiceIdentities();
```

- *Type:* java.util.List<java.lang.String>

Set of Consul service identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.5+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#service_identities ConsulSecretBackendRole#service_identities}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Specifies the TTL for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/consul_secret_backend_role#ttl ConsulSecretBackendRole#ttl}

---



