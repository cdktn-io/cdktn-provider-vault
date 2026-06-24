# `pkiExternalCaSecretBackendOrder` Submodule <a name="`pkiExternalCaSecretBackendOrder` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendOrder <a name="PkiExternalCaSecretBackendOrder" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order vault_pki_external_ca_secret_backend_order}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_order.PkiExternalCaSecretBackendOrder;

PkiExternalCaSecretBackendOrder.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .roleName(java.lang.String)
//  .csr(java.lang.String)
//  .identifiers(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role to create the order for. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.csr">csr</a></code> | <code>java.lang.String</code> | PEM-encoded Certificate Signing Request containing identifiers. Required if `identifiers` is not provided. Mutually exclusive with `identifiers`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | List of identifiers (domain names) for the certificate order. Required if `csr` is not provided. Mutually exclusive with `csr`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#mount PkiExternalCaSecretBackendOrder#mount}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Name of the role to create the order for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#role_name PkiExternalCaSecretBackendOrder#role_name}

---

##### `csr`<sup>Optional</sup> <a name="csr" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.csr"></a>

- *Type:* java.lang.String

PEM-encoded Certificate Signing Request containing identifiers. Required if `identifiers` is not provided. Mutually exclusive with `identifiers`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#csr PkiExternalCaSecretBackendOrder#csr}

---

##### `identifiers`<sup>Optional</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.identifiers"></a>

- *Type:* java.util.List<java.lang.String>

List of identifiers (domain names) for the certificate order. Required if `csr` is not provided. Mutually exclusive with `csr`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#identifiers PkiExternalCaSecretBackendOrder#identifiers}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#namespace PkiExternalCaSecretBackendOrder#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetCsr">resetCsr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetIdentifiers">resetIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCsr` <a name="resetCsr" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetCsr"></a>

```java
public void resetCsr()
```

##### `resetIdentifiers` <a name="resetIdentifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetIdentifiers"></a>

```java
public void resetIdentifiers()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendOrder resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isConstruct"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_order.PkiExternalCaSecretBackendOrder;

PkiExternalCaSecretBackendOrder.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_order.PkiExternalCaSecretBackendOrder;

PkiExternalCaSecretBackendOrder.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_order.PkiExternalCaSecretBackendOrder;

PkiExternalCaSecretBackendOrder.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_order.PkiExternalCaSecretBackendOrder;

PkiExternalCaSecretBackendOrder.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiExternalCaSecretBackendOrder.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendOrder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiExternalCaSecretBackendOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiExternalCaSecretBackendOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.challenges">challenges</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.expires">expires</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.lastError">lastError</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.lastUpdate">lastUpdate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.nextWorkDate">nextWorkDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.orderId">orderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.orderStatus">orderStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.csrInput">csrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.identifiersInput">identifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.csr">csr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `challenges`<sup>Required</sup> <a name="challenges" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.challenges"></a>

```java
public StringMap getChallenges();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.expires"></a>

```java
public java.lang.String getExpires();
```

- *Type:* java.lang.String

---

##### `lastError`<sup>Required</sup> <a name="lastError" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.lastError"></a>

```java
public java.lang.String getLastError();
```

- *Type:* java.lang.String

---

##### `lastUpdate`<sup>Required</sup> <a name="lastUpdate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.lastUpdate"></a>

```java
public java.lang.String getLastUpdate();
```

- *Type:* java.lang.String

---

##### `nextWorkDate`<sup>Required</sup> <a name="nextWorkDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.nextWorkDate"></a>

```java
public java.lang.String getNextWorkDate();
```

- *Type:* java.lang.String

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.orderId"></a>

```java
public java.lang.String getOrderId();
```

- *Type:* java.lang.String

---

##### `orderStatus`<sup>Required</sup> <a name="orderStatus" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.orderStatus"></a>

```java
public java.lang.String getOrderStatus();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `csrInput`<sup>Optional</sup> <a name="csrInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.csrInput"></a>

```java
public java.lang.String getCsrInput();
```

- *Type:* java.lang.String

---

##### `identifiersInput`<sup>Optional</sup> <a name="identifiersInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.identifiersInput"></a>

```java
public java.util.List<java.lang.String> getIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.csr"></a>

```java
public java.lang.String getCsr();
```

- *Type:* java.lang.String

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendOrderConfig <a name="PkiExternalCaSecretBackendOrderConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.pki_external_ca_secret_backend_order.PkiExternalCaSecretBackendOrderConfig;

PkiExternalCaSecretBackendOrderConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .roleName(java.lang.String)
//  .csr(java.lang.String)
//  .identifiers(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role to create the order for. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.csr">csr</a></code> | <code>java.lang.String</code> | PEM-encoded Certificate Signing Request containing identifiers. Required if `identifiers` is not provided. Mutually exclusive with `identifiers`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.identifiers">identifiers</a></code> | <code>java.util.List<java.lang.String></code> | List of identifiers (domain names) for the certificate order. Required if `csr` is not provided. Mutually exclusive with `csr`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#mount PkiExternalCaSecretBackendOrder#mount}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Name of the role to create the order for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#role_name PkiExternalCaSecretBackendOrder#role_name}

---

##### `csr`<sup>Optional</sup> <a name="csr" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.csr"></a>

```java
public java.lang.String getCsr();
```

- *Type:* java.lang.String

PEM-encoded Certificate Signing Request containing identifiers. Required if `identifiers` is not provided. Mutually exclusive with `identifiers`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#csr PkiExternalCaSecretBackendOrder#csr}

---

##### `identifiers`<sup>Optional</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.identifiers"></a>

```java
public java.util.List<java.lang.String> getIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

List of identifiers (domain names) for the certificate order. Required if `csr` is not provided. Mutually exclusive with `csr`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#identifiers PkiExternalCaSecretBackendOrder#identifiers}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#namespace PkiExternalCaSecretBackendOrder#namespace}

---



