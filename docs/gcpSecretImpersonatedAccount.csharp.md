# `gcpSecretImpersonatedAccount` Submodule <a name="`gcpSecretImpersonatedAccount` Submodule" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretImpersonatedAccount <a name="GcpSecretImpersonatedAccount" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/gcp_secret_impersonated_account vault_gcp_secret_impersonated_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new GcpSecretImpersonatedAccount(Construct Scope, string Id, GcpSecretImpersonatedAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig">GcpSecretImpersonatedAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig">GcpSecretImpersonatedAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetTokenScopes">ResetTokenScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTokenScopes` <a name="ResetTokenScopes" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetTokenScopes"></a>

```csharp
private void ResetTokenScopes()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GcpSecretImpersonatedAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GcpSecretImpersonatedAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GcpSecretImpersonatedAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GcpSecretImpersonatedAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GcpSecretImpersonatedAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GcpSecretImpersonatedAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GcpSecretImpersonatedAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GcpSecretImpersonatedAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/gcp_secret_impersonated_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GcpSecretImpersonatedAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountProject">ServiceAccountProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccountInput">ImpersonatedAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopesInput">TokenScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccount">ImpersonatedAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopes">TokenScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ServiceAccountProject`<sup>Required</sup> <a name="ServiceAccountProject" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountProject"></a>

```csharp
public string ServiceAccountProject { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImpersonatedAccountInput`<sup>Optional</sup> <a name="ImpersonatedAccountInput" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccountInput"></a>

```csharp
public string ImpersonatedAccountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `TokenScopesInput`<sup>Optional</sup> <a name="TokenScopesInput" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopesInput"></a>

```csharp
public string[] TokenScopesInput { get; }
```

- *Type:* string[]

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImpersonatedAccount`<sup>Required</sup> <a name="ImpersonatedAccount" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccount"></a>

```csharp
public string ImpersonatedAccount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `TokenScopes`<sup>Required</sup> <a name="TokenScopes" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopes"></a>

```csharp
public string[] TokenScopes { get; }
```

- *Type:* string[]

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretImpersonatedAccountConfig <a name="GcpSecretImpersonatedAccountConfig" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new GcpSecretImpersonatedAccountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Backend,
    string ImpersonatedAccount,
    string ServiceAccountEmail,
    string Id = null,
    string Namespace = null,
    string[] TokenScopes = null,
    string Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.backend">Backend</a></code> | <code>string</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.impersonatedAccount">ImpersonatedAccount</a></code> | <code>string</code> | Name of the Impersonated Account to create. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | Email of the GCP service account. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/gcp_secret_impersonated_account#id GcpSecretImpersonatedAccount#id}. |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.tokenScopes">TokenScopes</a></code> | <code>string[]</code> | List of OAuth scopes to assign to `access_token` secrets generated under this impersonated account (`access_token` impersonated accounts only). |
| <code><a href="#@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.ttl">Ttl</a></code> | <code>string</code> | Time to live. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/gcp_secret_impersonated_account#backend GcpSecretImpersonatedAccount#backend}

---

##### `ImpersonatedAccount`<sup>Required</sup> <a name="ImpersonatedAccount" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.impersonatedAccount"></a>

```csharp
public string ImpersonatedAccount { get; set; }
```

- *Type:* string

Name of the Impersonated Account to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/gcp_secret_impersonated_account#impersonated_account GcpSecretImpersonatedAccount#impersonated_account}

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

Email of the GCP service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/gcp_secret_impersonated_account#service_account_email GcpSecretImpersonatedAccount#service_account_email}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/gcp_secret_impersonated_account#id GcpSecretImpersonatedAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/gcp_secret_impersonated_account#namespace GcpSecretImpersonatedAccount#namespace}

---

##### `TokenScopes`<sup>Optional</sup> <a name="TokenScopes" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.tokenScopes"></a>

```csharp
public string[] TokenScopes { get; set; }
```

- *Type:* string[]

List of OAuth scopes to assign to `access_token` secrets generated under this impersonated account (`access_token` impersonated accounts only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/gcp_secret_impersonated_account#token_scopes GcpSecretImpersonatedAccount#token_scopes}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/gcp_secret_impersonated_account#ttl GcpSecretImpersonatedAccount#ttl}

---



