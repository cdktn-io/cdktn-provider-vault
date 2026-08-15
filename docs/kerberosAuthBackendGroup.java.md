# `kerberosAuthBackendGroup` Submodule <a name="`kerberosAuthBackendGroup` Submodule" id="@cdktn/provider-vault.kerberosAuthBackendGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KerberosAuthBackendGroup <a name="KerberosAuthBackendGroup" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group vault_kerberos_auth_backend_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_group.KerberosAuthBackendGroup;

KerberosAuthBackendGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .namespace(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path where the Kerberos auth method is mounted. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the LDAP group. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | Set of Vault policies to associate with this group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path where the Kerberos auth method is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group#mount KerberosAuthBackendGroup#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the LDAP group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group#name KerberosAuthBackendGroup#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group#namespace KerberosAuthBackendGroup#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.Initializer.parameter.policies"></a>

- *Type:* java.util.List<java.lang.String>

Set of Vault policies to associate with this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group#policies KerberosAuthBackendGroup#policies}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.resetPolicies">resetPolicies</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.resetPolicies"></a>

```java
public void resetPolicies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KerberosAuthBackendGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.isConstruct"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_group.KerberosAuthBackendGroup;

KerberosAuthBackendGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_group.KerberosAuthBackendGroup;

KerberosAuthBackendGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_group.KerberosAuthBackendGroup;

KerberosAuthBackendGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_group.KerberosAuthBackendGroup;

KerberosAuthBackendGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KerberosAuthBackendGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KerberosAuthBackendGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KerberosAuthBackendGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KerberosAuthBackendGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KerberosAuthBackendGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.policiesInput">policiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.policiesInput"></a>

```java
public java.util.List<java.lang.String> getPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KerberosAuthBackendGroupConfig <a name="KerberosAuthBackendGroupConfig" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.kerberos_auth_backend_group.KerberosAuthBackendGroupConfig;

KerberosAuthBackendGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .namespace(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path where the Kerberos auth method is mounted. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the LDAP group. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | Set of Vault policies to associate with this group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path where the Kerberos auth method is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group#mount KerberosAuthBackendGroup#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the LDAP group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group#name KerberosAuthBackendGroup#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group#namespace KerberosAuthBackendGroup#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-vault.kerberosAuthBackendGroup.KerberosAuthBackendGroupConfig.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

Set of Vault policies to associate with this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_group#policies KerberosAuthBackendGroup#policies}

---



