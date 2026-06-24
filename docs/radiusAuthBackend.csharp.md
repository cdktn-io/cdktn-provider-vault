# `radiusAuthBackend` Submodule <a name="`radiusAuthBackend` Submodule" id="@cdktn/provider-vault.radiusAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RadiusAuthBackend <a name="RadiusAuthBackend" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend vault_radius_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new RadiusAuthBackend(Construct Scope, string Id, RadiusAuthBackendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig">RadiusAuthBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig">RadiusAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetAliasMetadata">ResetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetDialTimeout">ResetDialTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNasPort">ResetNasPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetReadTimeout">ResetReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenType">ResetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetUnregisteredUserPolicies">ResetUnregisteredUserPolicies</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAliasMetadata` <a name="ResetAliasMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetAliasMetadata"></a>

```csharp
private void ResetAliasMetadata()
```

##### `ResetDialTimeout` <a name="ResetDialTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetDialTimeout"></a>

```csharp
private void ResetDialTimeout()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNasPort` <a name="ResetNasPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNasPort"></a>

```csharp
private void ResetNasPort()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetReadTimeout` <a name="ResetReadTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetReadTimeout"></a>

```csharp
private void ResetReadTimeout()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenBoundCidrs"></a>

```csharp
private void ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenExplicitMaxTtl"></a>

```csharp
private void ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenMaxTtl"></a>

```csharp
private void ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNoDefaultPolicy"></a>

```csharp
private void ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNumUses"></a>

```csharp
private void ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPeriod"></a>

```csharp
private void ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPolicies"></a>

```csharp
private void ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenTtl"></a>

```csharp
private void ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenType"></a>

```csharp
private void ResetTokenType()
```

##### `ResetUnregisteredUserPolicies` <a name="ResetUnregisteredUserPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetUnregisteredUserPolicies"></a>

```csharp
private void ResetUnregisteredUserPolicies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RadiusAuthBackend resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

RadiusAuthBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

RadiusAuthBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

RadiusAuthBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

RadiusAuthBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RadiusAuthBackend resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RadiusAuthBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RadiusAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RadiusAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasIdentifier">NasIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadataInput">AliasMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeoutInput">DialTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPortInput">NasPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeoutInput">ReadTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoInput">SecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersionInput">SecretWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtlInput">TokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPoliciesInput">UnregisteredUserPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeout">DialTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPort">NasPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeout">ReadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWo">SecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersion">SecretWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPolicies">UnregisteredUserPolicies</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `NasIdentifier`<sup>Required</sup> <a name="NasIdentifier" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasIdentifier"></a>

```csharp
public string NasIdentifier { get; }
```

- *Type:* string

---

##### `AliasMetadataInput`<sup>Optional</sup> <a name="AliasMetadataInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DialTimeoutInput`<sup>Optional</sup> <a name="DialTimeoutInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeoutInput"></a>

```csharp
public double DialTimeoutInput { get; }
```

- *Type:* double

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NasPortInput`<sup>Optional</sup> <a name="NasPortInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPortInput"></a>

```csharp
public double NasPortInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ReadTimeoutInput`<sup>Optional</sup> <a name="ReadTimeoutInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeoutInput"></a>

```csharp
public double ReadTimeoutInput { get; }
```

- *Type:* double

---

##### `SecretWoInput`<sup>Optional</sup> <a name="SecretWoInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoInput"></a>

```csharp
public string SecretWoInput { get; }
```

- *Type:* string

---

##### `SecretWoVersionInput`<sup>Optional</sup> <a name="SecretWoVersionInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersionInput"></a>

```csharp
public double SecretWoVersionInput { get; }
```

- *Type:* double

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrsInput"></a>

```csharp
public string[] TokenBoundCidrsInput { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtlInput"></a>

```csharp
public double TokenExplicitMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtlInput"></a>

```csharp
public double TokenMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicyInput"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUsesInput"></a>

```csharp
public double TokenNumUsesInput { get; }
```

- *Type:* double

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriodInput"></a>

```csharp
public double TokenPeriodInput { get; }
```

- *Type:* double

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPoliciesInput"></a>

```csharp
public string[] TokenPoliciesInput { get; }
```

- *Type:* string[]

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtlInput"></a>

```csharp
public double TokenTtlInput { get; }
```

- *Type:* double

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `UnregisteredUserPoliciesInput`<sup>Optional</sup> <a name="UnregisteredUserPoliciesInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPoliciesInput"></a>

```csharp
public string[] UnregisteredUserPoliciesInput { get; }
```

- *Type:* string[]

---

##### `AliasMetadata`<sup>Required</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DialTimeout`<sup>Required</sup> <a name="DialTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeout"></a>

```csharp
public double DialTimeout { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NasPort`<sup>Required</sup> <a name="NasPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPort"></a>

```csharp
public double NasPort { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ReadTimeout`<sup>Required</sup> <a name="ReadTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeout"></a>

```csharp
public double ReadTimeout { get; }
```

- *Type:* double

---

##### `SecretWo`<sup>Required</sup> <a name="SecretWo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWo"></a>

```csharp
public string SecretWo { get; }
```

- *Type:* string

---

##### `SecretWoVersion`<sup>Required</sup> <a name="SecretWoVersion" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersion"></a>

```csharp
public double SecretWoVersion { get; }
```

- *Type:* double

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; }
```

- *Type:* double

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; }
```

- *Type:* double

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; }
```

- *Type:* double

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; }
```

- *Type:* double

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `UnregisteredUserPolicies`<sup>Required</sup> <a name="UnregisteredUserPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPolicies"></a>

```csharp
public string[] UnregisteredUserPolicies { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RadiusAuthBackendConfig <a name="RadiusAuthBackendConfig" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new RadiusAuthBackendConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Host,
    string Mount,
    string SecretWo,
    double SecretWoVersion,
    System.Collections.Generic.IDictionary<string, string> AliasMetadata = null,
    double DialTimeout = null,
    string Namespace = null,
    double NasPort = null,
    double Port = null,
    double ReadTimeout = null,
    string[] TokenBoundCidrs = null,
    double TokenExplicitMaxTtl = null,
    double TokenMaxTtl = null,
    bool|IResolvable TokenNoDefaultPolicy = null,
    double TokenNumUses = null,
    double TokenPeriod = null,
    string[] TokenPolicies = null,
    double TokenTtl = null,
    string TokenType = null,
    string[] UnregisteredUserPolicies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.host">Host</a></code> | <code>string</code> | The RADIUS server to connect to. Examples: `radius.myorg.com`, `127.0.0.1`. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.mount">Mount</a></code> | <code>string</code> | Path of the enabled RADIUS auth backend mount to configure. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWo">SecretWo</a></code> | <code>string</code> | The RADIUS shared secret. This is a write-only field and will not be read back from Vault. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWoVersion">SecretWoVersion</a></code> | <code>double</code> | Version counter for the write-only `secret_wo` field. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dialTimeout">DialTimeout</a></code> | <code>double</code> | Number of seconds to wait for a backend connection before timing out. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.nasPort">NasPort</a></code> | <code>double</code> | The NAS-Port attribute of the RADIUS request. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.port">Port</a></code> | <code>double</code> | The UDP port where the RADIUS server is listening on. Defaults to `1812`. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.readTimeout">ReadTimeout</a></code> | <code>double</code> | Number of seconds to wait for a response from the RADIUS server. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenType">TokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.unregisteredUserPolicies">UnregisteredUserPolicies</a></code> | <code>string[]</code> | A set of policies to be granted to unregistered users. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The RADIUS server to connect to. Examples: `radius.myorg.com`, `127.0.0.1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#host RadiusAuthBackend#host}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path of the enabled RADIUS auth backend mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#mount RadiusAuthBackend#mount}

---

##### `SecretWo`<sup>Required</sup> <a name="SecretWo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWo"></a>

```csharp
public string SecretWo { get; set; }
```

- *Type:* string

The RADIUS shared secret. This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#secret_wo RadiusAuthBackend#secret_wo}

---

##### `SecretWoVersion`<sup>Required</sup> <a name="SecretWoVersion" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWoVersion"></a>

```csharp
public double SecretWoVersion { get; set; }
```

- *Type:* double

Version counter for the write-only `secret_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the secret changes. Increment this value whenever you update `secret_wo` so Terraform detects the change and applies an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#secret_wo_version RadiusAuthBackend#secret_wo_version}

---

##### `AliasMetadata`<sup>Optional</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#alias_metadata RadiusAuthBackend#alias_metadata}

---

##### `DialTimeout`<sup>Optional</sup> <a name="DialTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dialTimeout"></a>

```csharp
public double DialTimeout { get; set; }
```

- *Type:* double

Number of seconds to wait for a backend connection before timing out.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#dial_timeout RadiusAuthBackend#dial_timeout}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#namespace RadiusAuthBackend#namespace}

---

##### `NasPort`<sup>Optional</sup> <a name="NasPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.nasPort"></a>

```csharp
public double NasPort { get; set; }
```

- *Type:* double

The NAS-Port attribute of the RADIUS request.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#nas_port RadiusAuthBackend#nas_port}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The UDP port where the RADIUS server is listening on. Defaults to `1812`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#port RadiusAuthBackend#port}

---

##### `ReadTimeout`<sup>Optional</sup> <a name="ReadTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.readTimeout"></a>

```csharp
public double ReadTimeout { get; set; }
```

- *Type:* double

Number of seconds to wait for a response from the RADIUS server.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#read_timeout RadiusAuthBackend#read_timeout}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; set; }
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_bound_cidrs RadiusAuthBackend#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; set; }
```

- *Type:* double

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_explicit_max_ttl RadiusAuthBackend#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; set; }
```

- *Type:* double

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_max_ttl RadiusAuthBackend#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_no_default_policy RadiusAuthBackend#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; set; }
```

- *Type:* double

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_num_uses RadiusAuthBackend#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; set; }
```

- *Type:* double

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_period RadiusAuthBackend#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; set; }
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_policies RadiusAuthBackend#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; set; }
```

- *Type:* double

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_ttl RadiusAuthBackend#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_type RadiusAuthBackend#token_type}

---

##### `UnregisteredUserPolicies`<sup>Optional</sup> <a name="UnregisteredUserPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.unregisteredUserPolicies"></a>

```csharp
public string[] UnregisteredUserPolicies { get; set; }
```

- *Type:* string[]

A set of policies to be granted to unregistered users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#unregistered_user_policies RadiusAuthBackend#unregistered_user_policies}

---



