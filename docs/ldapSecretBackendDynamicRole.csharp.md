# `ldapSecretBackendDynamicRole` Submodule <a name="`ldapSecretBackendDynamicRole` Submodule" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackendDynamicRole <a name="LdapSecretBackendDynamicRole" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_dynamic_role vault_ldap_secret_backend_dynamic_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new LdapSecretBackendDynamicRole(Construct Scope, string Id, LdapSecretBackendDynamicRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig">LdapSecretBackendDynamicRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig">LdapSecretBackendDynamicRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMount">ResetMount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetRollbackLdif">ResetRollbackLdif</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetDefaultTtl"></a>

```csharp
private void ResetDefaultTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetMount` <a name="ResetMount" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMount"></a>

```csharp
private void ResetMount()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRollbackLdif` <a name="ResetRollbackLdif" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetRollbackLdif"></a>

```csharp
private void ResetRollbackLdif()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LdapSecretBackendDynamicRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

LdapSecretBackendDynamicRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

LdapSecretBackendDynamicRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

LdapSecretBackendDynamicRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

LdapSecretBackendDynamicRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LdapSecretBackendDynamicRole resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LdapSecretBackendDynamicRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LdapSecretBackendDynamicRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_dynamic_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LdapSecretBackendDynamicRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdifInput">CreationLdifInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdifInput">DeletionLdifInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtlInput">MaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdifInput">RollbackLdifInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdif">CreationLdif</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdif">DeletionLdif</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtl">MaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdif">RollbackLdif</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationLdifInput`<sup>Optional</sup> <a name="CreationLdifInput" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdifInput"></a>

```csharp
public string CreationLdifInput { get; }
```

- *Type:* string

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtlInput"></a>

```csharp
public double DefaultTtlInput { get; }
```

- *Type:* double

---

##### `DeletionLdifInput`<sup>Optional</sup> <a name="DeletionLdifInput" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdifInput"></a>

```csharp
public string DeletionLdifInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtlInput"></a>

```csharp
public double MaxTtlInput { get; }
```

- *Type:* double

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `RollbackLdifInput`<sup>Optional</sup> <a name="RollbackLdifInput" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdifInput"></a>

```csharp
public string RollbackLdifInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `CreationLdif`<sup>Required</sup> <a name="CreationLdif" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdif"></a>

```csharp
public string CreationLdif { get; }
```

- *Type:* string

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; }
```

- *Type:* double

---

##### `DeletionLdif`<sup>Required</sup> <a name="DeletionLdif" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdif"></a>

```csharp
public string DeletionLdif { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtl"></a>

```csharp
public double MaxTtl { get; }
```

- *Type:* double

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `RollbackLdif`<sup>Required</sup> <a name="RollbackLdif" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdif"></a>

```csharp
public string RollbackLdif { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendDynamicRoleConfig <a name="LdapSecretBackendDynamicRoleConfig" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new LdapSecretBackendDynamicRoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CreationLdif,
    string DeletionLdif,
    string RoleName,
    double DefaultTtl = null,
    string Id = null,
    double MaxTtl = null,
    string Mount = null,
    string Namespace = null,
    string RollbackLdif = null,
    string UsernameTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.creationLdif">CreationLdif</a></code> | <code>string</code> | A templatized LDIF string used to create a user account. May contain multiple entries. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.deletionLdif">DeletionLdif</a></code> | <code>string</code> | A templatized LDIF string used to delete the user account once its TTL has expired. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.roleName">RoleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | Specifies the TTL for the leases associated with this role. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_dynamic_role#id LdapSecretBackendDynamicRole#id}. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.maxTtl">MaxTtl</a></code> | <code>double</code> | Specifies the maximum TTL for the leases associated with this role. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.mount">Mount</a></code> | <code>string</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.rollbackLdif">RollbackLdif</a></code> | <code>string</code> | A templatized LDIF string used to attempt to rollback any changes in the event that execution of the creation_ldif results in an error. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | A template used to generate a dynamic username. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationLdif`<sup>Required</sup> <a name="CreationLdif" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.creationLdif"></a>

```csharp
public string CreationLdif { get; set; }
```

- *Type:* string

A templatized LDIF string used to create a user account. May contain multiple entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_dynamic_role#creation_ldif LdapSecretBackendDynamicRole#creation_ldif}

---

##### `DeletionLdif`<sup>Required</sup> <a name="DeletionLdif" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.deletionLdif"></a>

```csharp
public string DeletionLdif { get; set; }
```

- *Type:* string

A templatized LDIF string used to delete the user account once its TTL has expired.

This may contain multiple LDIF entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_dynamic_role#deletion_ldif LdapSecretBackendDynamicRole#deletion_ldif}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_dynamic_role#role_name LdapSecretBackendDynamicRole#role_name}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; set; }
```

- *Type:* double

Specifies the TTL for the leases associated with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_dynamic_role#default_ttl LdapSecretBackendDynamicRole#default_ttl}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_dynamic_role#id LdapSecretBackendDynamicRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.maxTtl"></a>

```csharp
public double MaxTtl { get; set; }
```

- *Type:* double

Specifies the maximum TTL for the leases associated with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_dynamic_role#max_ttl LdapSecretBackendDynamicRole#max_ttl}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_dynamic_role#mount LdapSecretBackendDynamicRole#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_dynamic_role#namespace LdapSecretBackendDynamicRole#namespace}

---

##### `RollbackLdif`<sup>Optional</sup> <a name="RollbackLdif" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.rollbackLdif"></a>

```csharp
public string RollbackLdif { get; set; }
```

- *Type:* string

A templatized LDIF string used to attempt to rollback any changes in the event that execution of the creation_ldif results in an error.

This may contain multiple LDIF entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_dynamic_role#rollback_ldif LdapSecretBackendDynamicRole#rollback_ldif}

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktn/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

A template used to generate a dynamic username.

This will be used to fill in the .Username field within the creation_ldif string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/ldap_secret_backend_dynamic_role#username_template LdapSecretBackendDynamicRole#username_template}

---



