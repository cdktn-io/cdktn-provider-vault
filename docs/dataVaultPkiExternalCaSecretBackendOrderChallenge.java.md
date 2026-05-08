# `dataVaultPkiExternalCaSecretBackendOrderChallenge` Submodule <a name="`dataVaultPkiExternalCaSecretBackendOrderChallenge` Submodule" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiExternalCaSecretBackendOrderChallenge <a name="DataVaultPkiExternalCaSecretBackendOrderChallenge" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge vault_pki_external_ca_secret_backend_order_challenge}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_pki_external_ca_secret_backend_order_challenge.DataVaultPkiExternalCaSecretBackendOrderChallenge;

DataVaultPkiExternalCaSecretBackendOrderChallenge.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .challengeType(java.lang.String)
    .identifier(java.lang.String)
    .mount(java.lang.String)
    .orderId(java.lang.String)
    .roleName(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.challengeType">challengeType</a></code> | <code>java.lang.String</code> | The type of ACME challenge to retrieve. Valid values are `http-01`, `dns-01`, `tls-alpn-01`. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.identifier">identifier</a></code> | <code>java.lang.String</code> | The identifier (domain name) for which to retrieve the challenge. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.orderId">orderId</a></code> | <code>java.lang.String</code> | The unique identifier for the ACME order. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role associated with the order. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `challengeType`<sup>Required</sup> <a name="challengeType" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.challengeType"></a>

- *Type:* java.lang.String

The type of ACME challenge to retrieve. Valid values are `http-01`, `dns-01`, `tls-alpn-01`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#challenge_type DataVaultPkiExternalCaSecretBackendOrderChallenge#challenge_type}

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.identifier"></a>

- *Type:* java.lang.String

The identifier (domain name) for which to retrieve the challenge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#identifier DataVaultPkiExternalCaSecretBackendOrderChallenge#identifier}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#mount DataVaultPkiExternalCaSecretBackendOrderChallenge#mount}

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.orderId"></a>

- *Type:* java.lang.String

The unique identifier for the ACME order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#order_id DataVaultPkiExternalCaSecretBackendOrderChallenge#order_id}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Name of the role associated with the order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#role_name DataVaultPkiExternalCaSecretBackendOrderChallenge#role_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#namespace DataVaultPkiExternalCaSecretBackendOrderChallenge#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultPkiExternalCaSecretBackendOrderChallenge resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isConstruct"></a>

```java
import io.cdktn.providers.vault.data_vault_pki_external_ca_secret_backend_order_challenge.DataVaultPkiExternalCaSecretBackendOrderChallenge;

DataVaultPkiExternalCaSecretBackendOrderChallenge.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.data_vault_pki_external_ca_secret_backend_order_challenge.DataVaultPkiExternalCaSecretBackendOrderChallenge;

DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformDataSource"></a>

```java
import io.cdktn.providers.vault.data_vault_pki_external_ca_secret_backend_order_challenge.DataVaultPkiExternalCaSecretBackendOrderChallenge;

DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.data_vault_pki_external_ca_secret_backend_order_challenge.DataVaultPkiExternalCaSecretBackendOrderChallenge;

DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataVaultPkiExternalCaSecretBackendOrderChallenge resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultPkiExternalCaSecretBackendOrderChallenge to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultPkiExternalCaSecretBackendOrderChallenge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultPkiExternalCaSecretBackendOrderChallenge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.expires">expires</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.keyAuthorization">keyAuthorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.challengeTypeInput">challengeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.orderIdInput">orderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.challengeType">challengeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.orderId">orderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.expires"></a>

```java
public java.lang.String getExpires();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyAuthorization`<sup>Required</sup> <a name="keyAuthorization" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.keyAuthorization"></a>

```java
public java.lang.String getKeyAuthorization();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `challengeTypeInput`<sup>Optional</sup> <a name="challengeTypeInput" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.challengeTypeInput"></a>

```java
public java.lang.String getChallengeTypeInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `orderIdInput`<sup>Optional</sup> <a name="orderIdInput" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.orderIdInput"></a>

```java
public java.lang.String getOrderIdInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `challengeType`<sup>Required</sup> <a name="challengeType" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.challengeType"></a>

```java
public java.lang.String getChallengeType();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.orderId"></a>

```java
public java.lang.String getOrderId();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallenge.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiExternalCaSecretBackendOrderChallengeConfig <a name="DataVaultPkiExternalCaSecretBackendOrderChallengeConfig" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_pki_external_ca_secret_backend_order_challenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig;

DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .challengeType(java.lang.String)
    .identifier(java.lang.String)
    .mount(java.lang.String)
    .orderId(java.lang.String)
    .roleName(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.challengeType">challengeType</a></code> | <code>java.lang.String</code> | The type of ACME challenge to retrieve. Valid values are `http-01`, `dns-01`, `tls-alpn-01`. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.identifier">identifier</a></code> | <code>java.lang.String</code> | The identifier (domain name) for which to retrieve the challenge. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.orderId">orderId</a></code> | <code>java.lang.String</code> | The unique identifier for the ACME order. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role associated with the order. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `challengeType`<sup>Required</sup> <a name="challengeType" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.challengeType"></a>

```java
public java.lang.String getChallengeType();
```

- *Type:* java.lang.String

The type of ACME challenge to retrieve. Valid values are `http-01`, `dns-01`, `tls-alpn-01`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#challenge_type DataVaultPkiExternalCaSecretBackendOrderChallenge#challenge_type}

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

The identifier (domain name) for which to retrieve the challenge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#identifier DataVaultPkiExternalCaSecretBackendOrderChallenge#identifier}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#mount DataVaultPkiExternalCaSecretBackendOrderChallenge#mount}

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.orderId"></a>

```java
public java.lang.String getOrderId();
```

- *Type:* java.lang.String

The unique identifier for the ACME order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#order_id DataVaultPkiExternalCaSecretBackendOrderChallenge#order_id}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Name of the role associated with the order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#role_name DataVaultPkiExternalCaSecretBackendOrderChallenge#role_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPkiExternalCaSecretBackendOrderChallenge.DataVaultPkiExternalCaSecretBackendOrderChallengeConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/pki_external_ca_secret_backend_order_challenge#namespace DataVaultPkiExternalCaSecretBackendOrderChallenge#namespace}

---



